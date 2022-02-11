export function noteValueToKind(duration, division) {
    let kind;
    let dots;
    if (duration === division * 4) {
        kind = "whole";
        dots = 0;
    }
    else if (duration === division * 2) {
        kind = "half";
        dots = 0;
    }
    else if (duration === division) {
        kind = "quarter";
        dots = 0;
    }
    else if (duration * 2 === division) {
        kind = "eighth";
        dots = 0;
    }
    else if (duration * 4 === division) {
        kind = "16th";
        dots = 0;
    }
    else if (duration * 8 === division) {
        kind = "32th";
        dots = 0;
    }
    else if (duration * 16 === division) {
        kind = "64th";
        dots = 0;
    }
    else if (duration === division * 6) {
        kind = "whole";
        dots = 1;
    }
    else if (duration === division * 3) {
        kind = "half";
        dots = 1;
    }
    else if (duration * 2 === division * 3) {
        kind = "quarter";
        dots = 1;
    }
    else if (duration * 4 === division * 3) {
        kind = "eighth";
        dots = 1;
    }
    else if (duration * 8 === division * 3) {
        kind = "16th";
        dots = 1;
    }
    else if (duration * 16 === division * 3) {
        kind = "32th";
        dots = 1;
    }
    else if (duration * 32 === division * 3) {
        kind = "64th";
        dots = 1;
    }
    else if (duration === division * 7) {
        kind = "whole";
        dots = 2;
    }
    else if (duration * 2 === division * 7) {
        kind = "half";
        dots = 2;
    }
    else if (duration * 4 === division * 7) {
        kind = "quarter";
        dots = 2;
    }
    else if (duration * 8 === division * 7) {
        kind = "eighth";
        dots = 2;
    }
    else if (duration * 16 === division * 7) {
        kind = "16th";
        dots = 2;
    }
    else if (duration * 32 === division * 7) {
        kind = "32th";
        dots = 2;
    }
    else if (duration * 64 === division * 7) {
        kind = "64th";
        dots = 2;
    }
    else {
        kind = "";
        dots = 0;
    }
    return [kind, dots];
}
export function lcm(a) {
    if (a.length == 0) {
        return 1;
    }
    function g(n, m) {
        return m !== 0 ? g(m, n % m) : n;
    }
    function l(n, m) {
        return (n * m) / g(n, m);
    }
    let ans = a[0];
    for (var i = 1; i < a.length; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
}
