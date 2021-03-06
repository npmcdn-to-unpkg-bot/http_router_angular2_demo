import { Subject } from './Subject';
import { Observer } from './Observer';
import { Subscription } from './Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class SubjectSubscription extends Subscription {
    subject: Subject<any>;
    subscriber: Observer<any>;
    isUnsubscribed: boolean;
    constructor(subject: Subject<any>, subscriber: Observer<any>);
    unsubscribe(): void;
}
