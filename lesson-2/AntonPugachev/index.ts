import { fromEvent, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

/** тип данных на  ответ от сервера*/
type tItem = { id: number, name: string };

// ----------------------------------------------------------------------------------------------
/** класс для поиска*/
export class Homework {
    public stream$$: Subject<tItem[]> = new Subject;
    public source$: Observable<String> = fromEvent($('.live-search'), 'keyup')
        .pipe(
            map((ev: Event) => {
                return (ev.target as HTMLInputElement).value;
            })
        );

    @debounce(200)
    public getDataFromGit(search: string): string {
        getData(search);
        return search;
    }
}

const myClass: Homework = new Homework;
// ----------------------------------------------------------------------------------------------
/** получение данных*/
myClass.stream$$.subscribe((data: tItem[]) => {
    console.log(data);
    $('.list li').remove();
    data.forEach((item: tItem) => {
        $('.list').append(`<li class='item'>${item.name}</li>`);
        console.log('test');

    });
});

// ----------------------------------------------------------------------------------------------
/** чисто запрос*/
function getData(search: string): void {
    $.ajax({
        url: 'https://api.github.com/users/mun4kin/repos',
        method: 'GET',
        dataType: 'json',
        success: (res: tItem[]): void => {
            myClass.stream$$.next(res
                .filter((item: tItem) => {
                    return ~item.name.toLowerCase().indexOf(search.toLowerCase());
                })
                .map((item: tItem) => {
                    return {
                        id: item.id,
                        name: item.name
                    };
                }));
        }
    });
}

// ----------------------------------------------------------------------------------------------
/** подписка на событие инпута*/
myClass.source$.subscribe((val: string) => {
    myClass.getDataFromGit(val);
});
// ----------------------------------------------------------------------------------------------
// отложенный запуск поиска
function debounce(ms: number): Function {
    return (target: Object, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalDescriptorValue: Function = descriptor.value;
        let timer: number | null = null;
        function decorated(...args: string[]): void {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                originalDescriptorValue.apply(target, args);
            }, ms);
        }

        return {
            ...descriptor,
            value: decorated
        };
    };
}
// ----------------------------------------------------------------------------------------------
/** первый вызов без поиска*/
getData('');
