const appConfig = {
  routes: 'client/routes.js',
  aggregates: [
    {
      name: 'ToDoList',
      commands: 'common/aggregates/todo_list.commands.js',
      projection: 'common/aggregates/todo_list.projection.js'
    }
  ],
  readModels: [
    {
      name: 'read-model-name',
      projection: 'common/read-models/read-model-name.projection.js',
      resolvers: 'common/read-models/read-model-name.resolvers.js',
      adapterName: 'default'
    }
  ],
  viewModels: [
    {
      name: 'ToDoList',
      projection: 'common/view-models/todo_list.projection.js'
    }
  ],
  sagas: [
    {
      name: 'saga-name',
      cronHandlers: 'common/sagas/saga-name.cron.js',
      eventHandlers: 'common/sagas/saga-name.event.js'
    }
  ],
  redux: {
    reducers: { 'reducer-name': 'client/reducers/reducer-name.js' },
    middlewares: ['client/middlewares/middleware-name.js']
  }
}

export default appConfig
