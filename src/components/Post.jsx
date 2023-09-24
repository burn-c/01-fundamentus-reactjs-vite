/* eslint-disable react/prop-types */
export default function Post({author, content}) {
    return (
    <>
        <strong>{author}</strong>
        <p>{content}</p>
    </>
    )
}
