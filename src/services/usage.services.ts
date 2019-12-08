export abstract class GenerateUniqueID {
    static generator() {
        const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
        const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
        const allNumbers = [..."0123456789"];
        const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
        return [...Array(28)].map(i => base[Math.random()*base.length|0]).join('');
    }
}
