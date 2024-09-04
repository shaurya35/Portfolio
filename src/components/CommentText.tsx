// src/components/CommentedText.tsx
interface CommentedTextProps {
    text: string;
  }
  
  const CommentedText: React.FC<CommentedTextProps> = ({ text }) => {
    return (
      <pre className="commented-text">
        {text.split('\n').map((line, index) => (
          <p key={index} className="text-gray-400">
            {line}
          </p>
        ))}
      </pre>
    );
  };
  
  export default CommentedText;
  