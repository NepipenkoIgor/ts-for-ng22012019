import { fromEvent, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


type tItem = { id: number, name: string };
// ответ от сервера
const stream$$: Subject<tItem[]> = new Subject;
// получение данных
stream$$.subscribe((data: tItem[]) => {
    console.log(data);
    $('.list li').remove();
    data.forEach((item: tItem) => {
        $('.list').append(`<li class='item'>${item.name}</li>`);
        console.log('test');

    });
});


/** чисто получение репо*/
function getData(search: string): void {
    $.ajax({
        url: 'https://api.github.com/users/mun4kin/repos',
        method: 'GET',
        dataType: 'json',
        // tslint:disable-next-line
        success: function (res: tItem[]) {
            stream$$.next(res
                .filter((item: tItem) => {
                   return  ~item.name.toLowerCase().indexOf(search.toLowerCase());
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

//  класс для поиска
export class Homework {
    @debounce(500)
    public getDataFromGit(search: string): string {
        getData(search);
        return search;
    }
}

const myClass: Homework = new Homework;
// вытаскиваем значение для поиска
const source$: Observable<String> = fromEvent($('.live-search'), 'keyup')
    .pipe(
        map((ev: Event) => {
            return (ev.target as HTMLInputElement).value;
        })
    );

source$.subscribe((val: string) => {
    myClass.getDataFromGit(val);
});


// отложенный запуск поиска
function debounce(ms: number): Function {
    return (
        _target: Object,
        _methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor => {
        const originalDescriptorValue: Function = descriptor.value;
        let timer: number | null = null;

        // tslint:disable-next-line
        function decorated(...args: any[]): void {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                originalDescriptorValue.apply(_target, args);
            }, ms);
        }

        return {
            ...descriptor,
            value: decorated
        };
    };
}


