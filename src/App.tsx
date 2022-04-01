import './App.css';
import 'lucy-react-components/dist/index.css';

import {Theme, Flowbox, Navbar, Fade, Codeblock} from 'lucy-react-components';
import {useState} from "react";

type Colours = { [name: string]: [string, string] };
const colours: Colours = {
	'Red': ['#ff9999', '#b35959'],
	'Yellow': ['#ffcc99', '#cc8e5c'],
	'Green': ['#99ffcc', '#59b386'],
	'Cyan': ['#99ffff', '#59b3b3'],
	'Blue': ['#99b8ff', '#5974b3'],
	'Purple': ['#b399ff', '#6f59b3'],
	'Pink': ['#f799ff', '#ab59b3']
}

function App() {
	const [theme, setTheme] = useState("light")
	const [move, setMove] = useState(false)


	const toggleTheme = () => setTheme(theme => theme === "dark" ? 'light' : 'dark')

	return <Theme theme={theme as 'light' | 'dark'}>
		<Navbar content="Lucy's Branding Thing" lightswitch pulled={theme === "light"} onSwitchPull={toggleTheme}/>
		<Fade fadeIn={true}>
			<p>I wrote a set of React components to help my websites look consistent. Did I need to? Absolutely not.
				Did I do it anyway? You bet!</p>

			<h1>Colours</h1>
			<p>All these colours are connected by HSL -
				the bright ones have a saturation of 40% and a lightness of 100%.
				The dark ones have a saturation of 50% and a lightness of 70%.</p>
			<Flowbox width={10}>
				{Object.keys(colours).map(col => (<div key={col} style={
					{background: `var(--${col.toLowerCase()})`, color: 'var(--dark-primary)'}
				}>
					<h2>{col}</h2>
					<p>{colours[col][0]}</p>
					<p className="dark" style={{background: `var(--${col.toLowerCase()}-dark)`}}>{colours[col][1]}</p>
				</div>))}
			</Flowbox>
			<Flowbox width={15}>
				<div style={{background: `var(--dark-primary)`}} className="fg-light">
					<h2>Dark Primary</h2>
					<p>#1d1f21</p>
				</div>
				<div style={{background: `var(--dark-secondary)`}} className="fg-light">
					<h2>Dark Secondary</h2>
					<p>#2b2e31</p>
				</div>
				<div style={{background: `var(--light-secondary)`}} className="fg-dark">
					<h2>Light Secondary</h2>
					<p>#b7aeb7</p>
				</div>
				<div style={{background: `var(--light-primary)`}} className="fg-dark">
					<h2>Light Primary</h2>
					<p>#e7e4e7</p>
				</div>
			</Flowbox>
			<h1>Typography</h1>
			<Flowbox>
				<div>
					<p>I primarily use <a href="https://www.lexend.com/">Lexend Deca</a>.
						It's a great font - easy to read, serious yet playful, and is great for accessibility.
						It also has a variable weight axis.
					</p>
					<div className="fontsDemo">
						<p style={{fontSize: '1.25em'}}>Body text (weight 300)</p>
						<h3>Heading text (weight 400)</h3>
						<p className="focus">Focus text (weight 450)</p>
					</div>
				</div>
				<div className="mono">
					<p>
						<a href="https://fonts.google.com/specimen/Roboto+Mono">Roboto Mono</a> is my monospace font of
						choice.
					</p>
					<Codeblock lang="JavaScript">{
						`const codeBlocksAre = {
	highlightedBy: () => "PrismJS" + "a theme"
}`}
					</Codeblock>
				</div>
			</Flowbox>

			<h1>Motion</h1>
			<p>Motion is really important, it helps give the site some character. For motion, I use this curve:</p>
			<h3><code style={{display: 'inline'}}>0.4s cubic-bezier(.9,-.5,.1,1.5)</code></h3>
			<div className={"motionDemo"}><span className={move ? 'move' : undefined} /> </div>
			<p><button className="accent" onClick={() => setMove(x => !x)}>Move the thing!</button></p>
			<p>This curve is nice and springy, giving a responsive, playful feel to components.
				It works best for smaller movements.</p>
			<p>Fading the entire page in and out can be achieved by reducing opacity, stretching and translating in the
				Y axis at the same time. Reload the page for a demo!</p>

		</Fade>
	</Theme>;
}

export default App;
