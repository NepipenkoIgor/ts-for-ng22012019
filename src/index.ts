// ReactiveX = Iterator + Observer
//
// const sequence$: Observable<number> = from([1, 2, 3, 4]);
//
// sequence$.subscribe((value: number) => {
//     console.log(value);
// });
// let count: number = 0;
//
// const sequence$: Observable<number> = Observable.create((subscriber: Subscriber<number>) => {
//     setInterval(() => {
//         count++;
//         subscriber.next(count);
//     }, 1000);
// });

// const sequence$: Observable<number[] | number> = of([1, 2, 3, 4], 1);

// const el: HTMLInputElement = document.querySelector('.live-search') as HTMLInputElement;
//
// const sequence$: Observable<Event> = fromEvent(el, 'input');
//
//
// sequence$.subscribe((ev: Event) => {
//     console.log('subscribe 1 ===>', (ev.target as HTMLInputElement).value);
// }, () => {}, () => {
//     console.log('completed');
// });
//
// setTimeout(() => {
//     sequence$.subscribe((ev: Event) => {
//         console.log('subscribe 2 ===>', (ev.target as HTMLInputElement).value);
//     }, () => {}, () => {
//         console.log('completed');
//     });
// }, 5000);

// sequence$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });
//
// setTimeout(() => {
//     sequence$.subscribe((value: number) => {
//         console.log('subscribe 2 ===>', value);
//     }, () => {}, () => {
//         console.log('completed');
//     });
// }, 5000);

// RxJS -> lodash for stream;
// const sequence1$: Observable<number> = from([1, 2, 3, 4]);
// const sequence2$: Observable<number> = sequence1$.pipe(
//     map((val: number) => val ** 3),
//     filter((val: number) => val % 3 === 0)
//     // operators
// );

/*
   sequence1$  --1--2--3--4|
        map((val: number) => val ** 3)
               --1--8--27--64|
        filter((val: number) => val % 3 === 0)
   sequence1$  --------27----|
 */


// sequence2$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });

/** TAP **/
// const sequence1$: Observable<number> = interval(1000);
/*
 sequence1$ --0--1--2--3--
    tap((x)=>x**3 + 2)
 sequence2$ --0--1--2--3--
 */

// const sequence2$: Observable<number> = sequence1$
//     .pipe(
//         tap((x: number) => {
//             console.log('x ===> ', x)
//             return x ** 3 + 2;
//         })
//     )
// sequence2$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });


/** TAKE, SKIP **/
// const sequence1$: Observable<number> = interval(1000);
// /*
//  sequence1$ --0--1--2--3--4--5--6--7--8--
//             skip(5)
//             take(3)
//  sequence2$ -----------------5--6--7|
//  */
//
// const sequence2$: Observable<number> = sequence1$
//     .pipe(
//         tap((x: number) => console.log('x==>', x)),
//         skip(5),
//         take(3)
//     )
// sequence2$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });


// /** Merge || **/
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
// const sequence2$: Observable<number> = interval(300)
//     .pipe(take(5));
// /*
//   sequence1$ ----0----1----2----3|
//   sequence2$ --0--1--2--3--4|
//                merge
//   sequence3$ --0-01--21-3--(24)-3|
//  */
//
// const sequence3$: Observable<number> = merge(sequence1$, sequence2$);
// sequence3$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });


/** combineLatest || **/
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
// const sequence2$: Observable<number> = interval(300)
//     .pipe(take(5));
// /*
//   sequence1$ ----0----1----2----3|
//   sequence2$ --0--1--2--3--4|
//                combineLatest
//   sequence3$ ----[0,0],[0,1]--[0,2][1,2]-[1,3]--[2,3][2,4]--[3,4]|
//  */
//
// const sequence3$: Observable<number[]> = combineLatest(sequence1$, sequence2$);
// sequence3$.subscribe((value: number[]) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });

import { map } from 'rxjs/operators';
import { from } from 'rxjs';

/**zip */
// const sequence1$: Observable<string> = of('h', 'e', 'l', 'l', 'o');
// const sequence2$: Observable<number> = interval(400)
//     .pipe(take(5));
// /*
//   sequence1$ ---(hello)|
//   sequence2$ ---0---1---2---3---4|
//                zip((x,y) => x)
//   sequence3$ ---h---e---l---l---o|
//  */
//
// const sequence3$: Observable<string> = zip(sequence1$, sequence2$)
//     .pipe(map(([x, _y]: [string, number]) => x));
// sequence3$.subscribe((value: string) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });

// const touchStart$: Observable<number> = (fromEvent(
//     document,
//     'touchstart'
// ) as Observable<TouchEvent>)
//     .pipe(map(({ changedTouches }: TouchEvent) => changedTouches[0].clientX));
// const touchEnd$: Observable<number> = (fromEvent(
//     document,
//     'touchend'
// ) as Observable<TouchEvent>)
//     .pipe(map(({ changedTouches }: TouchEvent) => changedTouches[0].clientX));
//
//
// const swipe$: Observable<[number, number]> = zip(touchStart$, touchEnd$)
//
// swipe$.subscribe(([startX, endX]: [number, number]) => {
//     console.log('subscribe 1 ===>', startX - endX);
//     if (startX - endX > 0) {
//         console.log('left swipe');
//         return;
//     }
//     console.log('right swipe');
// }, () => {}, () => {
//     console.log('completed');
// });

//
// const sequence$: Observable<string> = interval(500)
//     .pipe(zip<number, string>(
//         of('a', 'b', 'c', 1, 'd'),
//         (_x: number, y: string) => y
//     ))
//
// const result$: Observable<string> = sequence$.pipe(map((x: string) => x.toUpperCase()));
//

// const sequence$: Observable<number> = Observable.create((subscriber: Subscriber<number>) => {
//     let count: number = 0;
//     setInterval(() => {
//         count++;
//         if (count % 4 === 0) {
//             subscriber.error(count);
//             return;
//         }
//         subscriber.next(count);
//     }, 1000);
// });

// sequence$.pipe(
//     // retry(3)
//     // retryWhen((errObs: Observable<string>) => errObs.pipe(delay(3000)))
//     // catchError((_err: Error, _out: Observable<number>) => {
//     //     return [];
//     // })
// )
//     .subscribe((value: number) => {
//         console.log('subscribe 1 ===>', value);
//     }, () => {}, () => {
//         console.log('completed');
//     });

// skip(5), take(3), skip(5), TODO skipWhile =>

// const sequence$: Observable<number | string> = interval(1000)
//     .pipe(
//         map((value: number) => {
//             if (value % 3 === 0 && value !== 0) {
//                 return value.toString();
//             }
//             return value;
//         })
//     );
//
// sequence$
//     .pipe(
//         switchMap((value: number) => {
//             return of(value)
//                 .pipe(
//                     map((v: number) => {
//                             return v.toFixed();
//                         }
//                     ),
//                     catchError(() => {
//                         return of(0);
//                     })
//                 );
//         })
//         // map((value: number) => {
//         //     try {
//         //         return value.toFixed();
//         //     } catch (err) {
//         //         console.log(err);
//         //         return value;
//         //     }
//         //     // return value.toFixed();
//         // }),
//         // catchError(() => {
//         //     return  of(0);
//         // })
//     )
//     .subscribe((value: number | string | Observable<string | number>) => {
//         console.log(value);
//     }, (err: Error) => {
//         console.log(err);
//     }, () => {
//         console.log('complete');
//     });
// function a (b){
//     return b+1;
// }

// class SkipLimitSubscribe extends Subscriber<number> {
//
//     private _interval: number = 1;
//     private _count: number = 1;
//
//     public constructor(subscriber: Subscriber<number>, private _skip: number, private _limit: number) {
//         super(subscriber);
//     }
//
//     protected _next(value: number): void {
//         const borderLow: number = this._interval * (this._skip + this._limit) - this._limit;
//         const borderHight: number = borderLow + this._limit;
//         if (borderLow < this._count && this._count <= borderHight) {
//             this.destination && this.destination.next(value);
//             this._count++;
//             if (borderHight < this._count) {
//                 this._interval++;
//             }
//             return;
//         }
//         this._count++;
//     }
// }
//
// function skipLimit(skip: number, limit: number): (source: Observable<number>) => Observable<number> {
//     return (source: Observable<number>): Observable<number> => {
//         return source.lift({
//             call(subscriber: Subscriber<number>): void {
//                 source.subscribe(new SkipLimitSubscribe(subscriber, skip, limit));
//             }
//         });
//     };
// }
//
// interval(1000)
//     .pipe(skipLimit(4, 3))
//     .subscribe((value: number) => {
//         console.log(value);
//     });


// const sequence1$: Observable<number> = interval(1000)
//     .pipe(take(4));
// const highOrderSequence$: Observable<number> = sequence1$.pipe(
//     switchMap((_value: number) => of(1, 2)),
// )
//
// highOrderSequence$.subscribe((value: number) => {
//     console.log(value);
// });

// iterator + observer = Observable;

// const sequence$: Observable<number> = interval(1000);

// Observable + observer = Subject


// const sequence$$: AsyncSubject<string> = new AsyncSubject();
// sequence$$.subscribe((value: string) => {
//     console.log('sub 0 ===>', value);
// })
// sequence$$.next('Java');


// const sub1: Subscription = sequence$$.subscribe((value: string) => {
//     console.log('sub 1===>', value);
// })
// sequence$$.next('Hi');
//
//
// sequence$$.complete();
//
// sequence$$.subscribe((value: string) => {
//     console.log('sub 1 ===>', value);
// })
// setTimeout(() => {
//     console.log('After 10 sec');
//     sequence$$.subscribe((value: string) => {
//         console.log('sub 2 ===>', value);
//     });
// }, 10000)

// setTimeout(() => {
//     console.log('After 5 sec');
//     sequence$$.next('TypeScript');
//     // sub1.unsubscribe();
//     // sequence$$.subscribe((value: string) => {
//     //     console.log('sub 2===>', value);
//     // });
// }, 5000)
// setTimeout(() => {
//     sequence$$.next('Cool');
// }, 9800)
// setTimeout(() => {
//     console.log('After 10 sec');
//     sequence$$.next('Angular');
//     sequence$$.subscribe((value: string) => {
//         console.log('sub 3===>', value);
//     });
// }, 10000)

// multicast + Subject  = publish()


// const connectableObservable$: ConnectableObservable<number> = interval(1000)
//         .pipe(
//             publish()
//         ) as ConnectableObservable<number>;
//
// connectableObservable$.subscribe((value: number) => {
//     console.log('sub1 =>>>', value);
// })
//
// setTimeout(() => {
//     connectableObservable$.connect();
// }, 3000);
//
//
// setTimeout(() => {
//     connectableObservable$.subscribe((value: number) => {
//         console.log('sub2 =>>>', value);
//     });
// }, 10000);


// connectableObservable$.connect();


// EventLoop  ---(1 macrotask)---(1 macrotask)---(1 macrotask)---
//                start           timeout 1       timeout 2
//                End
//
//                promise 1
//                promise 2

console.log('Start');
setTimeout(() => console.log('timeout 1'));
setTimeout(() => console.log('timeout 2'));
Promise.resolve()
    .then(() => console.log('promise 1'));
Promise.resolve()
    .then(() => console.log('promise 2'));
console.log('End');


const arr: number[] = []
for (let i: number = 0; i < 10000; i++) {
    arr.push(i);
}
console.log('Start')
console.time('Schedule')
from(arr)
    .pipe(map((v: number) => v * 2 % 3))
    .subscribe(() => {}, () => {}, () => {
        console.timeEnd('Schedule');
    })

console.log('End');