export default function StudentPage() {

  const student = {
    name: "Paila Vyshnavi",
    roll: "2400030741",
    department: "CSE(HTE)",
    image: "/profile.png" 
  };

  return (
    <div style={{
      width: "300px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      
      <img 
        src={student.image} 
        alt="Profile" 
        style={{ 
          width: "120px", 
          height: "120px", 
          borderRadius: "50%", 
          marginBottom: "15px" 
        }} 
      />

      <h2><strong>Name: </strong>{student.name}</h2>
      <h2><strong>Roll No: </strong> {student.roll}</h2>
      <h2><strong>Department: </strong> {student.department}</h2>
    </div>
  );
}
