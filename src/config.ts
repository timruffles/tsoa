export interface Config {
  /**
  * Swagger generation configuration object
  */
  swagger: SwaggerConfig;

  /**
  * Route generation configuration object
  */
  routes: RoutesConfig;
}

export interface SwaggerConfig {
  /**
  * Generated SwaggerConfig.json will output here
  */
  outputDirectory: string;

  /**
  * The entry point to your API
  */
  entryFile: string;

  /**
  * API host, expressTemplate.g. localhost:3000 or https://myapi.com
  */
  host?: string;

  /**
  * API version number; defaults to npm package version
  */
  version?: string;

  /**
  * API name; defaults to npm package name
  */
  name?: string;

  /**
  * 'API description; defaults to npm package description
  */
  description?: string;

  /**
  * API license; defaults to npm package license
  */
  license?: string;

  /**
  * Base API path; e.g. the 'v1' in https://myapi.com/v1
  */
  basePath?: string;

  /**
  * Extend generated swagger spec with this object
  * Note that generated properties will always take precedence over what get specified here
  */
  spec?: any;
  
  /**
   * Alter how the spec is merged to generated swagger spec.
   * Possible values:
   *  - 'immediate' is overriding top level elements only thus you can not append a new path or alter an existing value without erasing same level elements.
   *  - 'recursive' proceed to a deep merge and will concat every branches or override or create new values if needed. @see https://www.npmjs.com/package/merge
   * The default is set to immediate so it is not breaking previous versions.
   * @default 'immediate'
   */
  specMerging?: 'immediate' | 'recursive';
}

export interface RoutesConfig {
  /**
  * Routes directory; generated routes.ts (which contains the generated code wiring up routes using middleware of choice) will be dropped here
  */
  routesDir: string;

  /**
  * The entry point to your API
  */
  entryFile: string;

  /**
  * Base API path; e.g. the '/v1' in https://myapi.com/v1
  */
  basePath?: string;

  /**
  * Middleware provider
  */
  middleware?: 'express' | 'hapi' | 'koa';

  /**
   * IOC module; e.g. './inversify/ioc' where IOC container named `iocContainer` is defined (https://github.com/inversify/InversifyJS)
   */
  iocModule?: string;
}
