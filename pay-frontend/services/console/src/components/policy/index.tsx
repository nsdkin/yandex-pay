import React from 'react';

import { cn } from '@bem-react/classname';

import { Link } from '../link';

import './styles.scss';

const cnPolicy = cn('Policy');

export function Policy(): JSX.Element {
    return (
        <div className={cnPolicy()}>
            <h1>
                Лицензионное соглашение на использование программных модулей для взаимодействия
                сервиса Yandex Pay с информационными системами
            </h1>
            <h1>Термины</h1>
            <p>
                Модули — нижеприведенные программные модули, представляющие собой программы для ЭВМ:
            </p>
            <p>
                1) Модуль «Yandex Pay» — позволяет настроить Сервис Yandex Pay и разместить на сайте
                Пользователя Платежную страницу и кнопку оплаты согласно Условиям.{' '}
            </p>
            <p>
                2) Модуль «Yandex Pay Checkout» - позволяет настроить взаимодействие с
                функциональностью Сервиса, которая позволяет осуществить выбор условий доставки
                товара и/или иного предмета платежа согласно п. 2.8 Условий
            </p>
            <p>Любой из программных модулей именуется «Модуль».</p>
            <p>
                Условия – Условия использования сервиса Yandex pay, опубликованные в сети «Интернет»
                по адресу:{' '}
                <Link href="https://yandex.ru/legal/token_pay_termsofuse">
                    https://yandex.ru/legal/token_pay_termsofuse
                </Link>{' '}
            </p>
            <p>
                Лицензия — настоящее лицензионное соглашение, размещенное в сети «Интернет» по
                адресу: <Link href="https://yandex.ru/legal/pay_modules_agreement/"></Link>
            </p>
            <p>
                Правообладатель — ООО «ЯНДЕКС», РФ, ОГРН: 1027700229193, 119021, г. Москва, ул. Льва
                Толстого, д. 16, являющееся обладателем исключительных прав на Модули.
            </p>
            <p>
                Пользователь — лицо, использующее любой из Модулей для автоматизации взаимодействия
                Информационной системы с Сервисом Yandex Pay.
            </p>
            <p>
                Информационная система — любая система, используемая Пользователем, включая систему
                управления контентом (CMS), для взаимодействия с которой предназначен Модуль.
            </p>
            <p>
                Иные термины, используемые в Лицензии, приведены в соответствии со значениями,
                данными в Условиях.{' '}
            </p>

            <h1>1. Общие положения</h1>
            <p>
                1.1. Настоящая Лицензия устанавливает условия использования Модулей и заключается
                между Пользователем и Правообладателем.
            </p>
            <p>
                1.2. Модули, предоставляемые по настоящей Лицензии, предназначены для совместного
                использования с Информационными системами в целях автоматизации взаимодействия
                Информационных систем с Сервисом Yandex Pay в соответствии с функциональностью
                конкретного Модуля.{' '}
            </p>
            <p>
                1.3. Начиная использовать любой из Модулей/его отдельные функции способом,
                предусмотренным п.3.1.1 Лицензии, или любым иным способом, Пользователь считается
                принявшим условия настоящей Лицензии, а также условия всех документов, на которые
                условия настоящей Лицензии ссылаются, в полном объеме, без всяких оговорок и
                исключений. В случае несогласия Пользователя с каким-либо положением Лицензии или
                указанных документов, Пользователь не вправе использовать какой-либо из Модулей.
            </p>
            <p>
                1.4. В случае использования Пользователем любого из Модулей, предназначенного для
                взаимодействия с Информационной системой, являющейся CMS, принимая условия Лицензии,
                Пользователь подтверждает, что является владельцем сайта в сети «Интернет», на
                котором с помощью Модуля устанавливается Платежная форма и кнопка «Оплатить с Я PAY»
                то есть является лицом, самостоятельно и по своему усмотрению определяющим порядок
                использования сайта, в том числе порядок размещения информации на таком сайте, а
                также определяющим состав функций такого сайта, и имеет необходимые права для
                внесения изменений на таком сайте.{' '}
            </p>
            <p>
                1.5. Модули предоставляются Правообладателем Пользователю на условиях «как есть».
                Пользователь должен самостоятельно оценивать риски и самостоятельно нести всю
                ответственность за свои действия, связанные с использованием Модулей.
                Правообладатель не гарантирует соответствие Модулей целям и ожиданиям Пользователя,
                бесперебойную и безошибочную работу Модулей. Правообладатель вправе вносить любые
                изменения в структуру и алгоритмы работы Модулей, приостанавливать его
                работоспособность или работоспособность его функций, изменять или прекращать
                выполнение функций Модулей без заблаговременного предупреждения Пользователя и без
                выражения последним согласия на это.
            </p>
            <p>
                1.6. Во всем, что не предусмотрено условиями настоящей Лицензии, отношения между
                Правообладателем и Пользователем в связи с использованием любого из Модулей
                регулируются:
            </p>
            <ul>
                <li>
                    <Link href="https://yandex.ru/legal/confidential">
                        Политикой конфиденциальности
                    </Link>
                    ,
                </li>
                <li>
                    <Link href="https://yandex.ru/legal/rules">
                        Пользовательским соглашением сервисов Яндекса
                    </Link>
                    ,
                </li>
                <li>
                    <Link href="https://yandex.ru/legal/token_pay_merchant/">
                        Условиями подключения к сервису «Yandex Pay» для продавцов
                    </Link>
                    ,
                </li>
                <li>
                    <Link href="https://yandex.ru/legal/token_pay_gateway/">
                        Условиями подключения к сервису «Yandex Pay» для шлюзов
                    </Link>
                    .
                </li>
            </ul>
            <h1>2. Исключительные права</h1>
            <p>
                2.1. Исключительные права на Модули принадлежат Правообладателю. Настоящая Лицензия
                не подразумевает отчуждение таких прав.
            </p>

            <h1>3. Условия использования Модулей</h1>
            <p>
                3.1. Правообладатель безвозмездно, на условиях простой (неисключительной) лицензии,
                предоставляет Пользователю непередаваемое право использования Модулей на территории
                всего мира на срок действия Лицензии либо на срок действия исключительных прав на
                каждый из Модулей (в зависимости от того, какой срок наступит ранее) следующими
                способами:
            </p>
            <ol>
                <li>
                    3.1.1. Применять Модули по прямому функциональному назначению, описанному в п.
                    1.2 настоящей Лицензии, в целях чего производить их воспроизведение, в том числе
                    скачивание или установку на устройствах Пользователя. Пользователь вправе
                    использовать Модули на неограниченном количестве устройств.
                </li>
            </ol>
            <p>
                3.2. Пользователь не вправе распространять любой из Модулей и/или все Модули,
                изменять наименование любого из Модулей и/или всех Модулей, изменять и/или удалять
                знаки охраны авторского права или иное указание на Правообладателя, если они
                включены в состав Модулей.
            </p>
            <p>
                3.3. Любое распространение программного обеспечения, созданного с использованием
                любого из Модулей, допускается при указании на факт использования Модуля для его
                создания путем включения слов «Создано с использованием модуля «[наименование
                Модуля]»» в раздел «О программе» или аналогичный по смыслу раздел интерфейса
                программы, в текстовое описание программы на странице ее скачивания, а также в
                содержащий описание программы файл, входящий в установочный пакет программы (если
                такой файл создается).
            </p>
            <p>
                3.4. Пользователь, получивший доступ к любому из Модулей, обязуется соблюдать
                следующие ограничения Лицензии: не изменять, не модифицировать, не декомпилировать
                и/или не производить иные действия с любым из Модулей и/или со всеми Модуля или
                исходным кодом таких Модулей, имеющие целью создание производного произведения с
                использованием таких Модулей.
            </p>
            <p>
                3.5. Пользователь настоящим уведомлен и согласен с тем, что при использовании любого
                из Модулей Пользователем Правообладатель осуществляет мониторинг всей деятельности
                по использованию такого Модуля и может собирать, анализировать статистику действий
                Пользователя, осуществленных с помощью Модуля. Пользователь настоящим уведомлен и
                соглашается с передачей любому из Модулей следующих сведений:
            </p>
            <ul>
                <li>
                    Название Информационной системы, используемой Пользователем, версия
                    Информационной системы;
                </li>
                <li>Настройки, изменение настроек, установка Модуля;</li>
                <li>Домен веб-сайта, на котором установлен Модуль;</li>
                <li>Активация и деактивация Модуля;</li>
                <li>Обновление Модуля;</li>
                <li>Удаление Модуля;</li>
                <li>Установка ключей Модуля.</li>
                <li>
                    Информацию о том, какое событие произошло на веб-сайте, на котором установлен
                    Модуль (отображение кнопки «Оплатить с Я PAY» или переход по этой кнопке), а
                    также id такого события
                </li>
            </ul>
            <p>
                3.6. Пользователь соглашается с тем, что передача указанных в п.3.5 сведений
                Правообладателю является технологически необходимой для обеспечения корректной
                работы Модулей.
            </p>
            <p>
                3.7. Пользователь соглашается с тем, что работа Сервиса зависит от Шлюза и
                взаимодействия Пользователя и Правообладателя со Шлюзом. Пользователь обязуется
                самостоятельно заключить договоры со Шлюзом, необходимые для работы Сервиса.{' '}
            </p>

            <h1>4. Ограничение использования и ответственность сторон</h1>
            <p>
                4.1. Пользователь предупрежден и согласен, что наименование, форма, структура,
                принципы формирования и функционирования любого из Модулей могут быть изменены
                Правообладателем без предварительного уведомления Пользователя. Пользователь
                осознает, что более поздние версии Модуля могут иметь отличия от более ранних версий
                и что результаты, полученные Пользователем с использованием более ранней версии
                Модуля, могут быть несовместимы с более поздней версией Модуля.
            </p>
            <p>
                4.2. Пользователь предупрежден и согласен, что Правообладатель вправе приостановить
                или прекратить создание новых версий любого из Модулей, а также приостановить или
                прекратить поддержку выпущенных версий без предварительного уведомления
                Пользователя.
            </p>
            <p>
                4.3. Пользователь предупрежден и согласен с тем, что несет полную ответственность за
                неправомерное использование Информационной системы совместно с любым из Модулей в
                соответствии с нормами применимого законодательства.
            </p>
            <p>
                4.4. Лицензия не наделяет Пользователя правами использования принадлежащей
                Правообладателю интеллектуальной собственности, включая, но не ограничиваясь, не
                предоставляет прав использования товарных знаков, логотипов, доменных имен,
                элементов фирменного стиля Правообладателя вне пределов, установленных настоящей
                Лицензией.
            </p>
            <p>
                4.5. Запрещено введение в заблуждение потребителей объекта, создаваемого с
                использованием любого из Модулей, в том числе, но не ограничиваясь, в виде заявлений
                Пользователя о гарантиях Правообладателя в отношении качеств объекта, создаваемого с
                использованием такого Модуля, о факте проверки и одобрения Правообладателем такого
                объекта, о разделении ответственности за качество объекта между Пользователем и
                Правообладателем.
            </p>
            <p>
                4.6. Запрещено использование любого из Модулей для создания вредоносного
                программного обеспечения, причиняющего вред устройствам и сетям, осуществляющего
                противоправные действия или выполняющее функции, запрещенные действующим
                законодательством.
            </p>
            <p>
                4.7. Объект, созданный с нарушением правил настоящей Лицензии, может быть по
                усмотрению Правообладателя и без уведомления Пользователя лишен возможности
                взаимодействия с оборудованием и/или программным обеспечением Правообладателя и
                Модулями Правообладателя.
            </p>
            <p>
                4.8. Правообладатель не несет ответственности перед Пользователем или любыми
                третьими лицами за недостатки программного обеспечения, созданного с использованием
                любого из Модулей, за нарушение таким программным обеспечением прав и законных
                интересов лиц и действующего законодательства.
            </p>
            <p>
                4.9. В максимальной степени, допустимой действующим законодательством,
                Правообладатель не несет никакой ответственности за какие-либо прямые или косвенные
                последствия какого-либо использования или невозможности использования какого-либо из
                Модулей и/или ущерб, причиненный Пользователю и/или третьим сторонам в результате
                использования или неиспользования такого Модуля, в том числе из-за возможных ошибок
                или сбоев в работе программ, созданных с использованием такого Модуля.
            </p>

            <h1>5. Обновления и новые версии</h1>
            <p>
                5.1. Правообладатель вправе предлагать Пользователю обновления, которые направлены
                на улучшение качеств Модулей и могут иметь форму патчей, дополнительных модулей,
                массивов данных, или полностью новых версий. Пользователь настоящим уведомлен об
                этом и согласен получать сообщения Правообладателя о доступности новых элементов или
                новых версий Модулей.
            </p>
            <p>
                5.2. Действие настоящей Лицензии распространяется на все последующие
                обновления/новые версии Модулей. Получение обновления/новой версии означает принятие
                Пользователем настоящей Лицензии для соответствующих обновлений/новых версий
                Модулей, если обновление версии какого-либо из Модулей не сопровождается иным
                лицензионным соглашением.
            </p>

            <h1>6. Изменения условий Лицензии</h1>
            <p>
                6.1. Условия настоящей Лицензии могут изменяться Правообладателем в одностороннем
                порядке без предварительного уведомления Пользователя. Действующая версия Лицензии
                постоянно доступна по адресу:{' '}
                <Link href="https://yandex.ru/legal/pay_modules_agreement/">
                    https://yandex.ru/legal/pay_modules_agreement/
                </Link>
            </p>
            <p>
                Указанные изменения в Лицензии вступают в силу с даты их публикации по указанному
                адресу, если иное не оговорено в соответствующей публикации.
            </p>
            <p>
                6.2. Все вопросы и претензии, связанные с использованием/невозможностью
                использования любого из Модулей, а также возможным нарушением любым из Модулей
                законодательства и/или прав третьих лиц должны направляться с использованием формы
                обратной связи, предусмотренной в описании конкретного Модуля.
            </p>
        </div>
    );
}