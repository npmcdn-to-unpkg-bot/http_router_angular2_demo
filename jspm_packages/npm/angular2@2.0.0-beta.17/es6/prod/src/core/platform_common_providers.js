/* */ 
"format esm";
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { Console } from 'angular2/src/core/console';
import { Reflector, reflector } from './reflection/reflection';
import { ReflectorReader } from './reflection/reflector_reader';
import { TestabilityRegistry } from 'angular2/src/core/testability/testability';
import { PLATFORM_CORE_PROVIDERS } from './application_ref';
function _reflector() {
    return reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS = CONST_EXPR([
    PLATFORM_CORE_PROVIDERS,
    new Provider(Reflector, { useFactory: _reflector, deps: [] }),
    new Provider(ReflectorReader, { useExisting: Reflector }),
    TestabilityRegistry,
    Console
]);
