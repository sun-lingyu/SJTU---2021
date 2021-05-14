function Header(props) {
    return (
        <div class="header">
            <div class="logo">
            <img src="/logo.png"></img>
            <span>{props.name}</span>
            </div>
        </div>
    )
  }
  export default Header