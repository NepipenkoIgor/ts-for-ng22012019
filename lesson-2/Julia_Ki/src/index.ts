import { from, fromEvent, Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

const el: HTMLInputElement = document.querySelector('.live-search') as HTMLInputElement;
const resultBox: HTMLDivElement = document.querySelector('.result-box') as HTMLDivElement;

let totalCount: number;
const allFoundItems: Object[] = [];

const sequence$: Observable<string | Event> = fromEvent(el, 'input').pipe(
    debounceTime(500),
    map((elem: Event) => (elem.target as HTMLInputElement).value),
    switchMap((item: string) => {
        return from(
            fetch(`https://api.github.com/search/repositories?q=${item}`)
                .then((results: any) => results.json())
        )
        .pipe(
            map((res: any) => {
                totalCount = res.total_count;
                return res.items;
            })
        );
    })
);

sequence$.subscribe((value: any) => {
    if (value === 'undefined') {
        return;
    }
    value.forEach((item: Object) => {
        allFoundItems.push(item);
    });
    render();
});

function render(): void {
    resultBox.innerHTML = `
         <div>Total count: ${totalCount}</div>
         <ul>
            ${console.log(allFoundItems.forEach((item: any) => console.log(item.name)))}
             ${allFoundItems.forEach((item: any) => `
                <li> ${item.name}</li>
             `)}
        </ul>
    `;
}
