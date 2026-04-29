import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">Disclaimer</p>
          <p>
            This site is an independent educational UI. Nothing here is investment advice, a solicitation, or
            a recommendation to buy or sell The Trade Desk (TTD) or any security. Price paths are synthetic;
            insider rows are illustrative samples; the scenario desk is a toy scoring layer for debate — not
            a valuation model. Past performance does not guarantee future results. Do your own research.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <span className="text-lg font-bold">CoinProfit</span>
            <p className="text-sm text-muted-foreground">
              CoinProfit surfaces TTD with charts, flow-style tape, and scenario labels — an educational desk,
              not a Bloomberg terminal.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#chart" className="hover:text-primary transition-colors">
                  Price chart
                </a>
              </li>
              <li>
                <a href="/#insider" className="hover:text-primary transition-colors">
                  Insider tape
                </a>
              </li>
              <li>
                <a href="/#scenario" className="hover:text-primary transition-colors">
                  Scenario desk
                </a>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">
                  About this build
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">External</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.sec.gov/edgar/search/"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEC EDGAR search
                </a>
              </li>
              <li>
                <a
                  href="https://www.thetradedesk.com/"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Trade Desk (company)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-8">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CoinProfit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
