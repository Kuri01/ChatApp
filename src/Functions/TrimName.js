export const TrimName = ({ name, trimAfter }) => {
  return name?.length > trimAfter
    ? name.substr(0, trimAfter - 1) + '...'
    : name;
};
