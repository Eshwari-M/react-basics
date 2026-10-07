export default function StudentName({ name, onComplete }) {
    return (
        <div>
            <p>Student Name: {name}</p>
            <button onClick={onComplete}>
                Complete Profile
            </button>
        </div>
    );
}