export const encode = (str) => str.replace(/(.)\1+/g, (match, char) => match.length + char);

export const decode = (str) => str.replace(/(\d+)(.)/g, (_match, count, char) => char.repeat(count));