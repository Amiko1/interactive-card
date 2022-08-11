import { computed } from 'vue'
import { mergeTexts } from "../utils/helpers.js";

export function useMerge(target, base) {

    const result = computed(() => {

        const MAX_NUMBER_SIZE = target.length;

        if (base.value?.length <= MAX_NUMBER_SIZE) {
            target = mergeTexts(target, base.value.trim());
        }

        return target;
    })

    return result
}
