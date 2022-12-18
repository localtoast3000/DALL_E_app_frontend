interface validateBodyProps {
  body: object;
  expectedProperties: Array<string>;
  allowNull: boolean;
}

export function validateBody({
  body,
  expectedProperties,
  allowNull = false,
}: validateBodyProps) {
  if (!body || !expectedProperties) return false;
  if (Object.keys(body).length !== expectedProperties.length) return false;
  if (!Object.keys(body).every((key) => expectedProperties.includes(key))) return false;
  if (allowNull) return true;
  else if (!Object.values(body).every((val) => !isNull(val))) return false;
  return true;
}

export function isNull(data: any) {
  return (
    [null, 'null', NaN, 'NaN', undefined, 'undefined'].includes(data) ||
    data?.length === 0 ||
    (isObject(data) && Object.keys(data).length === 0)
  );
}

export function isObject(data: any) {
  return typeof data === 'object' && !Array.isArray(data) ? true : false;
}

export function firstToUpperCase(str: string) {
  str = str.toLowerCase();
  return str.replace(str[0], str[0].toUpperCase());
}
