
export function mergeTexts(target, base) {

    if (!target) return base

    let arrayTarget = target.split("");

    let result = mergeArrays(arrayTarget, base);

    return result.join("");
}


function mergeArrays(target, base) {

    let test = target.map((item, i) => {
        if (base[i]) item = base[i]

        if (!base[i]) item = '0'

        return item

    })

    return test
}

