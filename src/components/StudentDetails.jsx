import StudentName from "./StudentName";

export default function StudentDetails({ name, onComplete }) {
    return (
        <div>
            <h2>Student Details</h2>
            <StudentName name={name} onComplete={onComplete} />
        </div>
    );
}