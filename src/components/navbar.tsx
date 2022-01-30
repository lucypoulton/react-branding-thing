export interface NavbarProps {
    content: string
}

export function Navbar(props: NavbarProps) {
    return <h1 className="navbar">{props.content}</h1>
}