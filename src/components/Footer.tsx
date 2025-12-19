
import { Copyright } from "lucide-react"

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-black text-white border-t border-white/20 font-kanit"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-sm md:text-base text-white/60">
          <Copyright className="h-4 w-4 text-white/70" />
          <span>{CURRENT_YEAR} Satwik Dubey</span>
        </p>
      </div>
    </footer>
  )
}