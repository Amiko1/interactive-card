import { computed } from 'vue'
import { mergeTexts } from "../utils/helpers.js";

export function useMerge(target, base) {

    const result = computed(() => {

        const MAX_NUMBER_SIZE = target.length;
        let mergedTxt = target

        if (base.value?.length <= MAX_NUMBER_SIZE) {
            mergedTxt = mergeTexts(mergedTxt, base.value.trim());
        }

        return mergedTxt;
    })

    return result
}
