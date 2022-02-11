export const parseAccidental = (s: string) => {
    let alter = 0;
    if (!!s.match(/^#+$/)) {
        alter += s.length;
    } else if (!!s.match(/^b+$/)) {
        alter -= s.length;
    }
    return alter;
};
