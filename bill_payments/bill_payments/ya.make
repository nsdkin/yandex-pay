OWNER(g:yandex-pay)

PY3_LIBRARY()

PEERDIR(
    contrib/python/aiosocksy
    contrib/python/marshmallow-enum/py2
    contrib/python/transitions
    contrib/python/uvloop
    library/python/resource
    mail/python/sendr-qtools
)

PY_SRCS(
    __init__.py
    api/app.py
    api/exceptions.py
    api/handlers/base.py
    api/handlers/bill.py
    api/handlers/document.py
    api/handlers/documents.py
    api/handlers/mixins/tvm.py
    api/handlers/orders.py
    api/handlers/search_bills.py
    api/handlers/transaction.py
    api/handlers/transactions.py
    api/handlers/user.py
    api/handlers/utility.py
    api/handlers/webhooks/kazna_bill.py
    api/handlers/webhooks/kazna_payment_status.py
    api/middlewares.py
    api/routes/external.py
    api/routes/utility.py
    api/routes/webhooks.py
    api/schemas/__init__.py
    api/schemas/base.py
    api/schemas/bill.py
    api/schemas/document.py
    api/schemas/order.py
    api/schemas/transaction.py
    api/schemas/user.py
    api/schemas/webhooks/__init__.py
    api/schemas/webhooks/kazna_bill.py
    api/schemas/webhooks/kazna_payment_status.py
    commands/pg_pinger_env.py
    commands/runserver.py
    commands/runworkers.py
    conf.py
    core/actions/base.py
    core/actions/notify_user_new_bill.py
    core/actions/bill/__init__.py
    core/actions/bill/create.py
    core/actions/bill/force_search.py
    core/actions/bill/search.py
    core/actions/bill/state.py
    core/actions/document/__init__.py
    core/actions/document/create.py
    core/actions/document/delete.py
    core/actions/document/list.py
    core/actions/document/update.py
    core/actions/order/create.py
    core/actions/ping_db.py
    core/actions/order/get.py
    core/actions/transaction/create.py
    core/actions/transaction/get.py
    core/actions/transaction/sync_status.py
    core/actions/transaction/update_status.py
    core/actions/user/__init__.py
    core/actions/user/create.py
    core/actions/user/ensure.py
    core/actions/user/get.py
    core/context.py
    core/entities/bill.py
    core/entities/mpi_3ds_info.py
    core/exceptions.py
    interactions/__init__.py
    interactions/base.py
    interactions/blackbox.py
    interactions/kazna/__init__.py
    interactions/kazna/entities.py
    interactions/kazna/exceptions.py
    interactions/kazna/schemas.py
    interactions/sup/__init__.py
    interactions/zora/__init__.py
    manage.py
    storage/__init__.py
    storage/db/tables.py
    storage/entities/__init__.py
    storage/entities/base.py
    storage/entities/bill.py
    storage/entities/bill_order.py
    storage/entities/document.py
    storage/entities/enums.py
    storage/entities/order.py
    storage/entities/task.py
    storage/entities/transaction.py
    storage/entities/user.py
    storage/exceptions.py
    storage/mappers/__init__.py
    storage/mappers/base.py
    storage/mappers/bill.py
    storage/mappers/bill_order.py
    storage/mappers/document.py
    storage/mappers/order.py
    storage/mappers/task.py
    storage/mappers/transaction.py
    storage/mappers/user.py
    storage/mappers/worker.py
    taskq/__init__.py
    taskq/app.py
    taskq/arbiter.py
    taskq/workers/__init__.py
    taskq/workers/action.py
    taskq/workers/base.py
    utils/cli.py
    utils/db.py
    utils/logging.py
    utils/schema.py
    utils/stats.py
    utils/tvm.py
)

RESOURCE_FILES(
    settings/000-logging.conf
    settings/000-logging.conf.development
    settings/010-common.conf
    settings/010-common.conf.development
    settings/020-database.conf
    settings/020-database.conf.development
    settings/020-database.conf.testing
    settings/030-interactions.conf
    settings/030-interactions.conf.testing
    settings/030-interactions.conf.production
    settings/040-tvm.conf
    settings/040-tvm.conf.development
    settings/040-tvm.conf.production
    settings/050-taskq.conf
    settings/060-api.conf
    settings/060-api.conf.development
    settings/060-api.conf.testing
)

END()

RECURSE_FOR_TESTS(tests)
