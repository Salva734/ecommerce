function Button({ title, w, handler }) {
  return (
    <button
      onClick={() => handler}
    className={`${w} bg-indigo-500 text-white p-3 rounded-md cursor-pointer shadow-lg shadow-indigo-500/50 hover:bg-blue-500 hover:shadow-blue-500/50 transition-colors'>`}
    >
      {title}
    </button>
  )
}

export default Button
