import assign from '@tinkoff/utils/assign';
import type { MetrikaParams } from '@trust/metrika';
import * as metrika from '@trust/metrika';
import { counterWithSaving } from '@trust/utils/mix/counter';

import { EXPERIMENT } from '../config';

interface MetrikaCounter<T extends MetrikaParams = {}> {
    (params?: T): void;
}

interface CounterParams {
    uid: string;
}

let COUNTER_PARAMS_PATH: string[] = [];

const _key = (...path: string[]): string[] => [...COUNTER_PARAMS_PATH, ...path];

const _params = (data = {}): any => assign(data, { datetime: Date.now() });

const goal =
    (goalId: string): MetrikaCounter =>
    (data): void => {
        metrika.reachGoal(goalId, _key(goalId), _params(data));
        metrika.counter(_key(goalId), _params(data));
    };

export function init(counterId: string, counterParams: CounterParams): void {
    COUNTER_PARAMS_PATH = [`puid-${counterParams.uid || 0}`];

    metrika.init(counterId, {}, EXPERIMENT.experiments || '');
}

export const counters = {
    confirmAgreement: <MetrikaCounter>goal('console_confirm_agreement'),

    consoleAgreementPassportEmail: <MetrikaCounter<{ email: boolean }>>(
        goal('console_agreement_passport_email')
    ),
};
