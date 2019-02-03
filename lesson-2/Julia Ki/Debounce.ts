const input1: HTMLDivElement = document.querySelector('input') as HTMLDivElement;

class Log {
    // @ts-ignore
    public getDetails(query: string): string {
        console.log(query);
    }
}

const log = new Log();

input1.addEventListener('input', (event) => {
    log.getDetails(event.target.value);
});

function debounceMethod(_target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDescriptorValue: Function = descriptor.value;
    let timerId: number;
    return {
        ...descriptor,
        value: (...args: any[]) => {
            const result: any = originalDescriptorValue(...args);
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                result();
            }, delay);
        }
    }
}

