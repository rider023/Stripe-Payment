import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Checkout, CheckoutFail, CheckoutSuccess } from './components/Checkout'
import Payments from './components/Payments'
import Customers from './components/Customers'
import Subscriptions from './components/Subscriptions'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">
                <span aria-label="emoji" role="img">
                  🛒
                </span>{' '}
                Checkout
              </Link>
            </li>
            <li>
              <Link to="/payments">
                <span aria-label="emoji" role="img">
                  💸
                </span>{' '}
                Payments
              </Link>
            </li>
            <li>
              <Link to="/customers">
                <span aria-label="emoji" role="img">
                  🧑🏿‍🤝‍🧑🏻
                </span>{' '}
                Customers
              </Link>
            </li>
            <li>
              <Link to="/subscriptions">
                <span aria-label="emoji" role="img">
                  🔄
                </span>{' '}
                Subscriptions
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route exact path="/checkout" element={<Checkout />} />

            <Route path="/payments" element={<Payments />} />

            <Route path="/customers" element={<Customers />} />

            <Route path="/subscriptions" element={<Subscriptions />} />

            <Route path="/success" element={<CheckoutSuccess />} />

            <Route path="/failed" element={<CheckoutFail />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
