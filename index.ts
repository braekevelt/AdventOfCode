import { readdir } from 'fs/promises';

const runAllDays = async () => {
    const items = await readdir('.', { withFileTypes: true });
    const directories = items.filter(item => item.isDirectory());
    const names = directories.map(item => item.name);
    const days = names.filter(name => name.startsWith('day'));
    for (const day of days) {
        console.log(`--------------- ${day.toUpperCase()} ---------------\n`);
        await import(`./${day}`);
        console.log('\n');
    }
};

runAllDays().catch(console.error);
