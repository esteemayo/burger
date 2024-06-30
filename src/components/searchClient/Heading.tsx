interface HeadingProps {
  query: string;
}

const Heading = ({ query }: HeadingProps) => {
  return (
    <h3>
      Search results for
      <small>{`"${query}"`}</small>
    </h3>
  );
};

export default Heading;
