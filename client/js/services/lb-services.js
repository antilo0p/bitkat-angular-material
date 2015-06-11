(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$__get__user
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$__get__user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.accessTokens.findById() instead.
        "::findById::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cliente.accessTokens.destroyById() instead.
        "::destroyById::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.accessTokens.updateById() instead.
        "::updateById::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.accessTokens() instead.
        "::get::cliente::accessTokens": {
          isArray: true,
          url: urlBase + "/clientes/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Cliente.accessTokens.create() instead.
        "::create::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Cliente.accessTokens.destroyAll() instead.
        "::delete::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.accessTokens.count() instead.
        "::count::cliente::accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.findById() instead.
        "::findById::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.destroyById() instead.
        "::destroyById::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.updateById() instead.
        "::updateById::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.accessTokens() instead.
        "::get::admin::accessTokens": {
          isArray: true,
          url: urlBase + "/admins/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.create() instead.
        "::create::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.destroyAll() instead.
        "::delete::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.count() instead.
        "::count::admin::accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cliente
 * @header lbServices.Cliente
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cliente` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cliente",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/clientes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cliente.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cliente.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.reservaciones.findById() instead.
        "prototype$__findById__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cliente.reservaciones.destroyById() instead.
        "prototype$__destroyById__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.reservaciones.updateById() instead.
        "prototype$__updateById__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/clientes/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Cliente.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Cliente.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/clientes/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Cliente.reservaciones() instead.
        "prototype$__get__reservaciones": {
          isArray: true,
          url: urlBase + "/clientes/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Cliente.reservaciones.create() instead.
        "prototype$__create__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Cliente.reservaciones.destroyAll() instead.
        "prototype$__delete__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.reservaciones.count() instead.
        "prototype$__count__reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#create
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/clientes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#upsert
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/clientes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#exists
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/clientes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#findById
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/clientes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#find
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/clientes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#findOne
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/clientes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#updateAll
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/clientes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#deleteById
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/clientes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#count
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/clientes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#prototype$updateAttributes
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/clientes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#login
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/clientes/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#logout
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/clientes/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#confirm
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/clientes/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#resetPassword
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/clientes/reset",
          method: "POST"
        },

        // INTERNAL. Use Reservacion.cliente() instead.
        "::get::reservacion::cliente": {
          url: urlBase + "/reservaciones/:id/cliente",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cliente#getCurrent
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/clientes" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cliente#updateOrCreate
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cliente#update
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cliente#destroyById
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cliente#removeById
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cliente#getCachedCurrent
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Cliente#login} or
         * {@link lbServices.Cliente#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Cliente instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente#isAuthenticated
         * @methodOf lbServices.Cliente
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente#getCurrentId
         * @methodOf lbServices.Cliente
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Cliente#modelName
    * @propertyOf lbServices.Cliente
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cliente`.
    */
    R.modelName = "Cliente";

    /**
     * @ngdoc object
     * @name lbServices.Cliente.accessTokens
     * @header lbServices.Cliente.accessTokens
     * @object
     * @description
     *
     * The object `Cliente.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `Cliente`.
     *
     * Call {@link lbServices.Cliente#accessTokens Cliente.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cliente#accessTokens
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Queries accessTokens of cliente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#count
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Counts accessTokens of cliente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#create
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#destroyAll
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#destroyById
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#findById
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::cliente::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.accessTokens#updateById
         * @methodOf lbServices.Cliente.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::cliente::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cliente.reservaciones
     * @header lbServices.Cliente.reservaciones
     * @object
     * @description
     *
     * The object `Cliente.reservaciones` groups methods
     * manipulating `Reservacion` instances related to `Cliente`.
     *
     * Call {@link lbServices.Cliente#reservaciones Cliente.reservaciones()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cliente#reservaciones
         * @methodOf lbServices.Cliente
         *
         * @description
         *
         * Queries reservaciones of cliente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::get::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#count
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Counts reservaciones of cliente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reservaciones.count = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::count::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#create
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Creates a new instance in reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.create = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::create::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#destroyAll
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Deletes all reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyAll = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::delete::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#destroyById
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Delete a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::destroyById::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#findById
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Find a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.findById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::findById::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cliente.reservaciones#updateById
         * @methodOf lbServices.Cliente.reservaciones
         *
         * @description
         *
         * Update a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.updateById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::updateById::cliente::reservaciones"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Empresa
 * @header lbServices.Empresa
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Empresa` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Empresa",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/empresas/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Empresa.categorias.findById() instead.
        "prototype$__findById__categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "GET"
        },

        // INTERNAL. Use Empresa.categorias.destroyById() instead.
        "prototype$__destroyById__categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.categorias.updateById() instead.
        "prototype$__updateById__categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.proveedores.findById() instead.
        "prototype$__findById__proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Empresa.proveedores.destroyById() instead.
        "prototype$__destroyById__proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.proveedores.updateById() instead.
        "prototype$__updateById__proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.admin() instead.
        "prototype$__get__admin": {
          url: urlBase + "/empresas/:id/admin",
          method: "GET"
        },

        // INTERNAL. Use Empresa.categorias() instead.
        "prototype$__get__categorias": {
          isArray: true,
          url: urlBase + "/empresas/:id/categorias",
          method: "GET"
        },

        // INTERNAL. Use Empresa.categorias.create() instead.
        "prototype$__create__categorias": {
          url: urlBase + "/empresas/:id/categorias",
          method: "POST"
        },

        // INTERNAL. Use Empresa.categorias.destroyAll() instead.
        "prototype$__delete__categorias": {
          url: urlBase + "/empresas/:id/categorias",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.categorias.count() instead.
        "prototype$__count__categorias": {
          url: urlBase + "/empresas/:id/categorias/count",
          method: "GET"
        },

        // INTERNAL. Use Empresa.proveedores() instead.
        "prototype$__get__proveedores": {
          isArray: true,
          url: urlBase + "/empresas/:id/proveedores",
          method: "GET"
        },

        // INTERNAL. Use Empresa.proveedores.create() instead.
        "prototype$__create__proveedores": {
          url: urlBase + "/empresas/:id/proveedores",
          method: "POST"
        },

        // INTERNAL. Use Empresa.proveedores.destroyAll() instead.
        "prototype$__delete__proveedores": {
          url: urlBase + "/empresas/:id/proveedores",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.proveedores.count() instead.
        "prototype$__count__proveedores": {
          url: urlBase + "/empresas/:id/proveedores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#create
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/empresas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#upsert
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/empresas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#exists
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/empresas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#findById
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/empresas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#find
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/empresas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#findOne
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/empresas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#updateAll
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/empresas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#deleteById
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/empresas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#count
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/empresas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#prototype$updateAttributes
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/empresas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Empresa#Status
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Obten disponibilida de la empresa
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "Status": {
          url: urlBase + "/empresas/:id/status",
          method: "GET"
        },

        // INTERNAL. Use Categoria.empresa() instead.
        "::get::categoria::empresa": {
          url: urlBase + "/categorias/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Servicio.empresa() instead.
        "::get::servicio::empresa": {
          url: urlBase + "/servicios/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Admin.empresa() instead.
        "::get::admin::empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Admin.empresa.create() instead.
        "::create::admin::empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "POST"
        },

        // INTERNAL. Use Admin.empresa.update() instead.
        "::update::admin::empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "PUT"
        },

        // INTERNAL. Use Admin.empresa.destroy() instead.
        "::destroy::admin::empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Empresa#updateOrCreate
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Empresa#update
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Empresa#destroyById
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Empresa#removeById
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Empresa#modelName
    * @propertyOf lbServices.Empresa
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Empresa`.
    */
    R.modelName = "Empresa";

    /**
     * @ngdoc object
     * @name lbServices.Empresa.categorias
     * @header lbServices.Empresa.categorias
     * @object
     * @description
     *
     * The object `Empresa.categorias` groups methods
     * manipulating `Categoria` instances related to `Empresa`.
     *
     * Call {@link lbServices.Empresa#categorias Empresa.categorias()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Empresa#categorias
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Queries categorias of empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R.categorias = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::get::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#count
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Counts categorias of empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.categorias.count = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::count::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#create
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Creates a new instance in categorias of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R.categorias.create = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::create::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#destroyAll
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Deletes all categorias of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categorias.destroyAll = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::delete::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#destroyById
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Delete a related item by id for categorias.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categorias
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categorias.destroyById = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::destroyById::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#findById
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Find a related item by id for categorias.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categorias
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R.categorias.findById = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::findById::empresa::categorias"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.categorias#updateById
         * @methodOf lbServices.Empresa.categorias
         *
         * @description
         *
         * Update a related item by id for categorias.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categorias
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R.categorias.updateById = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::updateById::empresa::categorias"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Empresa.proveedores
     * @header lbServices.Empresa.proveedores
     * @object
     * @description
     *
     * The object `Empresa.proveedores` groups methods
     * manipulating `Proveedor` instances related to `Empresa`.
     *
     * Call {@link lbServices.Empresa#proveedores Empresa.proveedores()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Empresa#proveedores
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Queries proveedores of empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::get::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#count
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Counts proveedores of empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.proveedores.count = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::count::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#create
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Creates a new instance in proveedores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.create = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::create::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#destroyAll
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Deletes all proveedores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proveedores.destroyAll = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::delete::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#destroyById
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Delete a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proveedores.destroyById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::destroyById::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#findById
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Find a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.findById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::findById::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa.proveedores#updateById
         * @methodOf lbServices.Empresa.proveedores
         *
         * @description
         *
         * Update a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.updateById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::updateById::empresa::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Empresa#admin
         * @methodOf lbServices.Empresa
         *
         * @description
         *
         * Fetches belongsTo relation admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admin = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::get::empresa::admin"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Categoria
 * @header lbServices.Categoria
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Categoria` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Categoria",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/categorias/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Categoria.empresa() instead.
        "prototype$__get__empresa": {
          url: urlBase + "/categorias/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.findById() instead.
        "prototype$__findById__servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.destroyById() instead.
        "prototype$__destroyById__servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.servicios.updateById() instead.
        "prototype$__updateById__servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.reservaciones.findById() instead.
        "prototype$__findById__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones.destroyById() instead.
        "prototype$__destroyById__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.updateById() instead.
        "prototype$__updateById__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.reservaciones.link() instead.
        "prototype$__link__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.reservaciones.unlink() instead.
        "prototype$__unlink__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.exists() instead.
        "prototype$__exists__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Categoria.servicios() instead.
        "prototype$__get__servicios": {
          isArray: true,
          url: urlBase + "/categorias/:id/servicios",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.create() instead.
        "prototype$__create__servicios": {
          url: urlBase + "/categorias/:id/servicios",
          method: "POST"
        },

        // INTERNAL. Use Categoria.servicios.destroyAll() instead.
        "prototype$__delete__servicios": {
          url: urlBase + "/categorias/:id/servicios",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.servicios.count() instead.
        "prototype$__count__servicios": {
          url: urlBase + "/categorias/:id/servicios/count",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones() instead.
        "prototype$__get__reservaciones": {
          isArray: true,
          url: urlBase + "/categorias/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones.create() instead.
        "prototype$__create__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Categoria.reservaciones.destroyAll() instead.
        "prototype$__delete__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.count() instead.
        "prototype$__count__reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#create
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/categorias",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#upsert
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/categorias",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#exists
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/categorias/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#findById
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/categorias/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#find
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/categorias",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#findOne
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/categorias/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#updateAll
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/categorias/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#deleteById
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/categorias/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#count
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/categorias/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Categoria#prototype$updateAttributes
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/categorias/:id",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.categorias.findById() instead.
        "::findById::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "GET"
        },

        // INTERNAL. Use Empresa.categorias.destroyById() instead.
        "::destroyById::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.categorias.updateById() instead.
        "::updateById::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.categorias() instead.
        "::get::empresa::categorias": {
          isArray: true,
          url: urlBase + "/empresas/:id/categorias",
          method: "GET"
        },

        // INTERNAL. Use Empresa.categorias.create() instead.
        "::create::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias",
          method: "POST"
        },

        // INTERNAL. Use Empresa.categorias.destroyAll() instead.
        "::delete::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.categorias.count() instead.
        "::count::empresa::categorias": {
          url: urlBase + "/empresas/:id/categorias/count",
          method: "GET"
        },

        // INTERNAL. Use Servicio.categoria() instead.
        "::get::servicio::categoria": {
          url: urlBase + "/servicios/:id/categoria",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Categoria#updateOrCreate
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Categoria#update
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Categoria#destroyById
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Categoria#removeById
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Categoria#modelName
    * @propertyOf lbServices.Categoria
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Categoria`.
    */
    R.modelName = "Categoria";


        /**
         * @ngdoc method
         * @name lbServices.Categoria#empresa
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Fetches belongsTo relation empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R.empresa = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::get::categoria::empresa"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Categoria.servicios
     * @header lbServices.Categoria.servicios
     * @object
     * @description
     *
     * The object `Categoria.servicios` groups methods
     * manipulating `Servicio` instances related to `Categoria`.
     *
     * Call {@link lbServices.Categoria#servicios Categoria.servicios()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Categoria#servicios
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Queries servicios of categoria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::get::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#count
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Counts servicios of categoria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.servicios.count = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::count::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#create
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Creates a new instance in servicios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.create = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::create::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#destroyAll
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Deletes all servicios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.servicios.destroyAll = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::delete::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#destroyById
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Delete a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.servicios.destroyById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::destroyById::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#findById
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Find a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.findById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::findById::categoria::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.servicios#updateById
         * @methodOf lbServices.Categoria.servicios
         *
         * @description
         *
         * Update a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.updateById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::updateById::categoria::servicios"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Categoria.reservaciones
     * @header lbServices.Categoria.reservaciones
     * @object
     * @description
     *
     * The object `Categoria.reservaciones` groups methods
     * manipulating `Reservacion` instances related to `Categoria`.
     *
     * Call {@link lbServices.Categoria#reservaciones Categoria.reservaciones()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Categoria#reservaciones
         * @methodOf lbServices.Categoria
         *
         * @description
         *
         * Queries reservaciones of categoria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::get::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#count
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Counts reservaciones of categoria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reservaciones.count = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::count::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#create
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Creates a new instance in reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.create = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::create::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#destroyAll
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Deletes all reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyAll = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::delete::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#destroyById
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Delete a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::destroyById::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#exists
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Check the existence of reservaciones relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.exists = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::exists::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#findById
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Find a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.findById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::findById::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#link
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Add a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.link = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::link::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#unlink
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Remove the reservaciones relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.unlink = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::unlink::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Categoria.reservaciones#updateById
         * @methodOf lbServices.Categoria.reservaciones
         *
         * @description
         *
         * Update a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.updateById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::updateById::categoria::reservaciones"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Servicio
 * @header lbServices.Servicio
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Servicio` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Servicio",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/servicios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Servicio.categoria() instead.
        "prototype$__get__categoria": {
          url: urlBase + "/servicios/:id/categoria",
          method: "GET"
        },

        // INTERNAL. Use Servicio.empresa() instead.
        "prototype$__get__empresa": {
          url: urlBase + "/servicios/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.findById() instead.
        "prototype$__findById__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.destroyById() instead.
        "prototype$__destroyById__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.updateById() instead.
        "prototype$__updateById__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.proveedores.link() instead.
        "prototype$__link__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.proveedores.unlink() instead.
        "prototype$__unlink__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.exists() instead.
        "prototype$__exists__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Servicio.reservaciones.findById() instead.
        "prototype$__findById__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones.destroyById() instead.
        "prototype$__destroyById__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.reservaciones.updateById() instead.
        "prototype$__updateById__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.proveedores() instead.
        "prototype$__get__proveedores": {
          isArray: true,
          url: urlBase + "/servicios/:id/proveedores",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.create() instead.
        "prototype$__create__proveedores": {
          url: urlBase + "/servicios/:id/proveedores",
          method: "POST"
        },

        // INTERNAL. Use Servicio.proveedores.destroyAll() instead.
        "prototype$__delete__proveedores": {
          url: urlBase + "/servicios/:id/proveedores",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.count() instead.
        "prototype$__count__proveedores": {
          url: urlBase + "/servicios/:id/proveedores/count",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones() instead.
        "prototype$__get__reservaciones": {
          isArray: true,
          url: urlBase + "/servicios/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones.create() instead.
        "prototype$__create__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Servicio.reservaciones.destroyAll() instead.
        "prototype$__delete__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.reservaciones.count() instead.
        "prototype$__count__reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#create
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/servicios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#upsert
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/servicios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#exists
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/servicios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#findById
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/servicios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#find
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/servicios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#findOne
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/servicios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#updateAll
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/servicios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#deleteById
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/servicios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#count
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/servicios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#prototype$updateAttributes
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/servicios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Servicio#disponibilidad
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Return availability of model instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{string}` - 
         *
         *  - `fecha` – `{date=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `disponibilidad` – `{string=}` - 
         *
         *  - `slots` – `{*=}` - 
         */
        "disponibilidad": {
          url: urlBase + "/servicios/:id/disponibilidad",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.findById() instead.
        "::findById::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.destroyById() instead.
        "::destroyById::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.servicios.updateById() instead.
        "::updateById::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.servicios() instead.
        "::get::categoria::servicios": {
          isArray: true,
          url: urlBase + "/categorias/:id/servicios",
          method: "GET"
        },

        // INTERNAL. Use Categoria.servicios.create() instead.
        "::create::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios",
          method: "POST"
        },

        // INTERNAL. Use Categoria.servicios.destroyAll() instead.
        "::delete::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.servicios.count() instead.
        "::count::categoria::servicios": {
          url: urlBase + "/categorias/:id/servicios/count",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.servicios.findById() instead.
        "::findById::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.servicios.destroyById() instead.
        "::destroyById::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.updateById() instead.
        "::updateById::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.servicios.link() instead.
        "::link::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.servicios.unlink() instead.
        "::unlink::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.exists() instead.
        "::exists::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Proveedor.servicios() instead.
        "::get::proveedor::servicios": {
          isArray: true,
          url: urlBase + "/proveedores/:id/servicios",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.servicios.create() instead.
        "::create::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios",
          method: "POST"
        },

        // INTERNAL. Use Proveedor.servicios.destroyAll() instead.
        "::delete::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.count() instead.
        "::count::proveedor::servicios": {
          url: urlBase + "/proveedores/:id/servicios/count",
          method: "GET"
        },

        // INTERNAL. Use Reservacion.servicio() instead.
        "::get::reservacion::servicio": {
          url: urlBase + "/reservaciones/:id/servicio",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Servicio#updateOrCreate
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Servicio#update
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Servicio#destroyById
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Servicio#removeById
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Servicio#modelName
    * @propertyOf lbServices.Servicio
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Servicio`.
    */
    R.modelName = "Servicio";


        /**
         * @ngdoc method
         * @name lbServices.Servicio#categoria
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Fetches belongsTo relation categoria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Categoria` object.)
         * </em>
         */
        R.categoria = function() {
          var TargetResource = $injector.get("Categoria");
          var action = TargetResource["::get::servicio::categoria"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio#empresa
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Fetches belongsTo relation empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R.empresa = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::get::servicio::empresa"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Servicio.proveedores
     * @header lbServices.Servicio.proveedores
     * @object
     * @description
     *
     * The object `Servicio.proveedores` groups methods
     * manipulating `Proveedor` instances related to `Servicio`.
     *
     * Call {@link lbServices.Servicio#proveedores Servicio.proveedores()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Servicio#proveedores
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Queries proveedores of servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::get::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#count
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Counts proveedores of servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.proveedores.count = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::count::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#create
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Creates a new instance in proveedores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.create = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::create::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#destroyAll
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Deletes all proveedores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proveedores.destroyAll = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::delete::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#destroyById
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Delete a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proveedores.destroyById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::destroyById::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#exists
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Check the existence of proveedores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.exists = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::exists::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#findById
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Find a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.findById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::findById::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#link
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Add a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.link = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::link::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#unlink
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Remove the proveedores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proveedores.unlink = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::unlink::servicio::proveedores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.proveedores#updateById
         * @methodOf lbServices.Servicio.proveedores
         *
         * @description
         *
         * Update a related item by id for proveedores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for proveedores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedores.updateById = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::updateById::servicio::proveedores"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Servicio.reservaciones
     * @header lbServices.Servicio.reservaciones
     * @object
     * @description
     *
     * The object `Servicio.reservaciones` groups methods
     * manipulating `Reservacion` instances related to `Servicio`.
     *
     * Call {@link lbServices.Servicio#reservaciones Servicio.reservaciones()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Servicio#reservaciones
         * @methodOf lbServices.Servicio
         *
         * @description
         *
         * Queries reservaciones of servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::get::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#count
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Counts reservaciones of servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reservaciones.count = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::count::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#create
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Creates a new instance in reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.create = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::create::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#destroyAll
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Deletes all reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyAll = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::delete::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#destroyById
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Delete a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::destroyById::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#findById
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Find a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.findById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::findById::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Servicio.reservaciones#updateById
         * @methodOf lbServices.Servicio.reservaciones
         *
         * @description
         *
         * Update a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.updateById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::updateById::servicio::reservaciones"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Proveedor
 * @header lbServices.Proveedor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Proveedor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Proveedor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/proveedores/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Proveedor.servicios.findById() instead.
        "prototype$__findById__servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.servicios.destroyById() instead.
        "prototype$__destroyById__servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.updateById() instead.
        "prototype$__updateById__servicios": {
          url: urlBase + "/proveedores/:id/servicios/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.servicios.link() instead.
        "prototype$__link__servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.servicios.unlink() instead.
        "prototype$__unlink__servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.exists() instead.
        "prototype$__exists__servicios": {
          url: urlBase + "/proveedores/:id/servicios/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Proveedor.reservaciones.findById() instead.
        "prototype$__findById__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones.destroyById() instead.
        "prototype$__destroyById__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.reservaciones.updateById() instead.
        "prototype$__updateById__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.servicios() instead.
        "prototype$__get__servicios": {
          isArray: true,
          url: urlBase + "/proveedores/:id/servicios",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.servicios.create() instead.
        "prototype$__create__servicios": {
          url: urlBase + "/proveedores/:id/servicios",
          method: "POST"
        },

        // INTERNAL. Use Proveedor.servicios.destroyAll() instead.
        "prototype$__delete__servicios": {
          url: urlBase + "/proveedores/:id/servicios",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.servicios.count() instead.
        "prototype$__count__servicios": {
          url: urlBase + "/proveedores/:id/servicios/count",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones() instead.
        "prototype$__get__reservaciones": {
          isArray: true,
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones.create() instead.
        "prototype$__create__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Proveedor.reservaciones.destroyAll() instead.
        "prototype$__delete__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.reservaciones.count() instead.
        "prototype$__count__reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#create
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/proveedores",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#upsert
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/proveedores",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#exists
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/proveedores/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#findById
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/proveedores/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#find
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/proveedores",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#findOne
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/proveedores/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#updateAll
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/proveedores/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#deleteById
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/proveedores/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#count
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/proveedores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#prototype$updateAttributes
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/proveedores/:id",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.proveedores.findById() instead.
        "::findById::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Empresa.proveedores.destroyById() instead.
        "::destroyById::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.proveedores.updateById() instead.
        "::updateById::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Empresa.proveedores() instead.
        "::get::empresa::proveedores": {
          isArray: true,
          url: urlBase + "/empresas/:id/proveedores",
          method: "GET"
        },

        // INTERNAL. Use Empresa.proveedores.create() instead.
        "::create::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores",
          method: "POST"
        },

        // INTERNAL. Use Empresa.proveedores.destroyAll() instead.
        "::delete::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores",
          method: "DELETE"
        },

        // INTERNAL. Use Empresa.proveedores.count() instead.
        "::count::empresa::proveedores": {
          url: urlBase + "/empresas/:id/proveedores/count",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.findById() instead.
        "::findById::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.destroyById() instead.
        "::destroyById::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.updateById() instead.
        "::updateById::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.proveedores.link() instead.
        "::link::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.proveedores.unlink() instead.
        "::unlink::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.exists() instead.
        "::exists::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Servicio.proveedores() instead.
        "::get::servicio::proveedores": {
          isArray: true,
          url: urlBase + "/servicios/:id/proveedores",
          method: "GET"
        },

        // INTERNAL. Use Servicio.proveedores.create() instead.
        "::create::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores",
          method: "POST"
        },

        // INTERNAL. Use Servicio.proveedores.destroyAll() instead.
        "::delete::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.proveedores.count() instead.
        "::count::servicio::proveedores": {
          url: urlBase + "/servicios/:id/proveedores/count",
          method: "GET"
        },

        // INTERNAL. Use Reservacion.proveedor() instead.
        "::get::reservacion::proveedor": {
          url: urlBase + "/reservaciones/:id/proveedor",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Proveedor#updateOrCreate
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#update
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#destroyById
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Proveedor#removeById
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Proveedor#modelName
    * @propertyOf lbServices.Proveedor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Proveedor`.
    */
    R.modelName = "Proveedor";

    /**
     * @ngdoc object
     * @name lbServices.Proveedor.servicios
     * @header lbServices.Proveedor.servicios
     * @object
     * @description
     *
     * The object `Proveedor.servicios` groups methods
     * manipulating `Servicio` instances related to `Proveedor`.
     *
     * Call {@link lbServices.Proveedor#servicios Proveedor.servicios()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Proveedor#servicios
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Queries servicios of proveedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::get::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#count
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Counts servicios of proveedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.servicios.count = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::count::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#create
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Creates a new instance in servicios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.create = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::create::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#destroyAll
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Deletes all servicios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.servicios.destroyAll = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::delete::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#destroyById
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Delete a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.servicios.destroyById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::destroyById::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#exists
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Check the existence of servicios relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.exists = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::exists::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#findById
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Find a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.findById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::findById::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#link
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Add a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.link = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::link::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#unlink
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Remove the servicios relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.servicios.unlink = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::unlink::proveedor::servicios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.servicios#updateById
         * @methodOf lbServices.Proveedor.servicios
         *
         * @description
         *
         * Update a related item by id for servicios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for servicios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicios.updateById = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::updateById::proveedor::servicios"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Proveedor.reservaciones
     * @header lbServices.Proveedor.reservaciones
     * @object
     * @description
     *
     * The object `Proveedor.reservaciones` groups methods
     * manipulating `Reservacion` instances related to `Proveedor`.
     *
     * Call {@link lbServices.Proveedor#reservaciones Proveedor.reservaciones()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Proveedor#reservaciones
         * @methodOf lbServices.Proveedor
         *
         * @description
         *
         * Queries reservaciones of proveedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::get::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#count
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Counts reservaciones of proveedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reservaciones.count = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::count::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#create
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Creates a new instance in reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.create = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::create::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#destroyAll
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Deletes all reservaciones of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyAll = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::delete::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#destroyById
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Delete a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reservaciones.destroyById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::destroyById::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#findById
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Find a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.findById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::findById::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proveedor.reservaciones#updateById
         * @methodOf lbServices.Proveedor.reservaciones
         *
         * @description
         *
         * Update a related item by id for reservaciones.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reservaciones
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservaciones.updateById = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::updateById::proveedor::reservaciones"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reservacion
 * @header lbServices.Reservacion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reservacion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reservacion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reservaciones/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reservacion.cliente() instead.
        "prototype$__get__cliente": {
          url: urlBase + "/reservaciones/:id/cliente",
          method: "GET"
        },

        // INTERNAL. Use Reservacion.servicio() instead.
        "prototype$__get__servicio": {
          url: urlBase + "/reservaciones/:id/servicio",
          method: "GET"
        },

        // INTERNAL. Use Reservacion.proveedor() instead.
        "prototype$__get__proveedor": {
          url: urlBase + "/reservaciones/:id/proveedor",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#create
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/reservaciones",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#upsert
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/reservaciones",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#exists
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reservaciones/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#findById
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reservaciones/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#find
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/reservaciones",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#findOne
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reservaciones/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#updateAll
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/reservaciones/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#deleteById
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/reservaciones/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#count
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reservaciones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#prototype$updateAttributes
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reservaciones/:id",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.reservaciones.findById() instead.
        "::findById::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cliente.reservaciones.destroyById() instead.
        "::destroyById::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.reservaciones.updateById() instead.
        "::updateById::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cliente.reservaciones() instead.
        "::get::cliente::reservaciones": {
          isArray: true,
          url: urlBase + "/clientes/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Cliente.reservaciones.create() instead.
        "::create::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Cliente.reservaciones.destroyAll() instead.
        "::delete::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Cliente.reservaciones.count() instead.
        "::count::cliente::reservaciones": {
          url: urlBase + "/clientes/:id/reservaciones/count",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones.findById() instead.
        "::findById::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones.destroyById() instead.
        "::destroyById::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.updateById() instead.
        "::updateById::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.reservaciones.link() instead.
        "::link::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Categoria.reservaciones.unlink() instead.
        "::unlink::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.exists() instead.
        "::exists::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Categoria.reservaciones() instead.
        "::get::categoria::reservaciones": {
          isArray: true,
          url: urlBase + "/categorias/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Categoria.reservaciones.create() instead.
        "::create::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Categoria.reservaciones.destroyAll() instead.
        "::delete::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Categoria.reservaciones.count() instead.
        "::count::categoria::reservaciones": {
          url: urlBase + "/categorias/:id/reservaciones/count",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones.findById() instead.
        "::findById::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones.destroyById() instead.
        "::destroyById::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.reservaciones.updateById() instead.
        "::updateById::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Servicio.reservaciones() instead.
        "::get::servicio::reservaciones": {
          isArray: true,
          url: urlBase + "/servicios/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Servicio.reservaciones.create() instead.
        "::create::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Servicio.reservaciones.destroyAll() instead.
        "::delete::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Servicio.reservaciones.count() instead.
        "::count::servicio::reservaciones": {
          url: urlBase + "/servicios/:id/reservaciones/count",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones.findById() instead.
        "::findById::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones.destroyById() instead.
        "::destroyById::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.reservaciones.updateById() instead.
        "::updateById::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proveedor.reservaciones() instead.
        "::get::proveedor::reservaciones": {
          isArray: true,
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "GET"
        },

        // INTERNAL. Use Proveedor.reservaciones.create() instead.
        "::create::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "POST"
        },

        // INTERNAL. Use Proveedor.reservaciones.destroyAll() instead.
        "::delete::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones",
          method: "DELETE"
        },

        // INTERNAL. Use Proveedor.reservaciones.count() instead.
        "::count::proveedor::reservaciones": {
          url: urlBase + "/proveedores/:id/reservaciones/count",
          method: "GET"
        },

        // INTERNAL. Use Opinion.reservacion() instead.
        "::get::opinion::reservacion": {
          url: urlBase + "/opiniones/:id/reservacion",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reservacion#updateOrCreate
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#update
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#destroyById
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#removeById
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Reservacion#modelName
    * @propertyOf lbServices.Reservacion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reservacion`.
    */
    R.modelName = "Reservacion";


        /**
         * @ngdoc method
         * @name lbServices.Reservacion#cliente
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Fetches belongsTo relation cliente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cliente` object.)
         * </em>
         */
        R.cliente = function() {
          var TargetResource = $injector.get("Cliente");
          var action = TargetResource["::get::reservacion::cliente"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#servicio
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Fetches belongsTo relation servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicio = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::get::reservacion::servicio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reservacion#proveedor
         * @methodOf lbServices.Reservacion
         *
         * @description
         *
         * Fetches belongsTo relation proveedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proveedor` object.)
         * </em>
         */
        R.proveedor = function() {
          var TargetResource = $injector.get("Proveedor");
          var action = TargetResource["::get::reservacion::proveedor"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Opinion
 * @header lbServices.Opinion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Opinion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Opinion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/opiniones/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Opinion.reservacion() instead.
        "prototype$__get__reservacion": {
          url: urlBase + "/opiniones/:id/reservacion",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#create
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/opiniones",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#upsert
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/opiniones",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#exists
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/opiniones/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#findById
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/opiniones/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#find
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/opiniones",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#findOne
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/opiniones/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#updateAll
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/opiniones/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#deleteById
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/opiniones/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#count
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/opiniones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Opinion#prototype$updateAttributes
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/opiniones/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Opinion#updateOrCreate
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Opinion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Opinion#update
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Opinion#destroyById
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Opinion#removeById
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Opinion#modelName
    * @propertyOf lbServices.Opinion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Opinion`.
    */
    R.modelName = "Opinion";


        /**
         * @ngdoc method
         * @name lbServices.Opinion#reservacion
         * @methodOf lbServices.Opinion
         *
         * @description
         *
         * Fetches belongsTo relation reservacion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reservacion` object.)
         * </em>
         */
        R.reservacion = function() {
          var TargetResource = $injector.get("Reservacion");
          var action = TargetResource["::get::opinion::reservacion"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Admin
 * @header lbServices.Admin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Admin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Admin",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/admins/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Admin.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.empresa() instead.
        "prototype$__get__empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "GET"
        },

        // INTERNAL. Use Admin.empresa.create() instead.
        "prototype$__create__empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "POST"
        },

        // INTERNAL. Use Admin.empresa.update() instead.
        "prototype$__update__empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "PUT"
        },

        // INTERNAL. Use Admin.empresa.destroy() instead.
        "prototype$__destroy__empresa": {
          url: urlBase + "/admins/:id/empresa",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/admins/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#create
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/admins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#upsert
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/admins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#exists
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/admins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/admins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#find
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/admins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findOne
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/admins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#updateAll
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/admins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#deleteById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/admins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#count
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/admins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$updateAttributes
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/admins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#login
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/admins/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#logout
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/admins/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#confirm
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/admins/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#resetPassword
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/admins/reset",
          method: "POST"
        },

        // INTERNAL. Use Empresa.admin() instead.
        "::get::empresa::admin": {
          url: urlBase + "/empresas/:id/admin",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/admins" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Admin#updateOrCreate
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#update
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#destroyById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#removeById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCachedCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Admin#login} or
         * {@link lbServices.Admin#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Admin instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#isAuthenticated
         * @methodOf lbServices.Admin
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrentId
         * @methodOf lbServices.Admin
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Admin#modelName
    * @propertyOf lbServices.Admin
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Admin`.
    */
    R.modelName = "Admin";

    /**
     * @ngdoc object
     * @name lbServices.Admin.accessTokens
     * @header lbServices.Admin.accessTokens
     * @object
     * @description
     *
     * The object `Admin.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `Admin`.
     *
     * Call {@link lbServices.Admin#accessTokens Admin.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Admin#accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Queries accessTokens of admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#count
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Counts accessTokens of admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#create
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#destroyAll
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#destroyById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#findById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#updateById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::admin::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Admin.empresa
     * @header lbServices.Admin.empresa
     * @object
     * @description
     *
     * The object `Admin.empresa` groups methods
     * manipulating `Empresa` instances related to `Admin`.
     *
     * Call {@link lbServices.Admin#empresa Admin.empresa()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Admin#empresa
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Fetches hasOne relation empresa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R.empresa = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::get::admin::empresa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.empresa#create
         * @methodOf lbServices.Admin.empresa
         *
         * @description
         *
         * Creates a new instance in empresa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R.empresa.create = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::create::admin::empresa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.empresa#destroy
         * @methodOf lbServices.Admin.empresa
         *
         * @description
         *
         * Deletes empresa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.empresa.destroy = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::destroy::admin::empresa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.empresa#update
         * @methodOf lbServices.Admin.empresa
         *
         * @description
         *
         * Update empresa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Empresa` object.)
         * </em>
         */
        R.empresa.update = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::update::admin::empresa"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
