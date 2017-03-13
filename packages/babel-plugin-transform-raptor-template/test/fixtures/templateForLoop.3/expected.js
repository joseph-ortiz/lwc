const memoized = Symbol();
export default function ($api, $cmp, $slotset) {
    const m = $cmp[memoized] || ($cmp[memoized] = {});
    return [$api.h(
        "section",
        {},
        $api.f([$api.i($cmp.items, function (item, index) {
            return [$api.h(
                "p",
                {},
                ["1", $api.s(item)]
            ), $api.h(
                "p",
                {},
                ["2", $api.s(item)]
            )];
        }), $api.h(
            "p",
            {},
            ["3", $api.s($cmp.item)]
        )])
    )];
}
export const templateUsedIds = ["items", "item"];