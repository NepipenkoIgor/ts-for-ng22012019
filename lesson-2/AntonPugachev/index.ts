import { Subject } from 'rxjs';

type tItem = { id: number, name: string };

const stream$$: Subject<tItem[]> = new Subject;


/** чисто получение репо*/
function getDataFromGit(): void {
    $.ajax({
        url: 'https://api.github.com/users/mun4kin/repos',
        method: 'GET',
        dataType: 'json',
        // tslint:disable-next-line
        success: function (res: tItem[]) {
            stream$$.next(res.map((item: tItem) => {
                return {
                    id: item.id,
                    name: item.name
                };
            }));
        }
    });
}

stream$$.subscribe((data: tItem[]) => {
    console.log(data);
    data.forEach((item: tItem) => {
        $('.list').append(`<li class='item'>${item.name}</li>`);
    });

});


getDataFromGit();

