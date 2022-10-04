const Lista = ({ lista }) => {
  return (
    <ul>
      {lista.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>
  );
};

export default Lista;
