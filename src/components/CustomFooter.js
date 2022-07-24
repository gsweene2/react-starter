import './CustomFooter.css';

function CustomFooter() {
    return (
      <>
        <p className="lead footer">&copy; Company Name {new Date().getFullYear()}</p>
      </>
    );
  }
  
  export default CustomFooter;
  