export default function (props) {
    return (
        <div className={`px-3 py-2 text-white rounded bg-${props.background}`}>
            <div className="d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill fs-5 me-3"></i>
                <span>{props.text}</span>
            </div>
        </div>
    )
}
