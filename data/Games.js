import megaJ from "../assets/images/mega-j.png";
import megaJG from "../assets/images/mega-j-g.png";
import megaJS from "../assets/images/mega-j-s.png";
import megaJB from "../assets/images/mega-j-b.png";
import colors from "../colors";

export const GamesData = [
  {
    id: 1,
    title: "BIG WIN JACKPOT!",
    amount: "GHS 70 MILLION",
    button: "PLAY NOW",
    btnColor: colors.primary,
    image: megaJS,
  },
  {
    id: 2,
    title: "GOLD",
    amount: "GHS 70 MILLION",
    button: "PLAY FOR GHS 20",
    btnColor: colors.yellow,
    image: megaJG,
  },
  {
    id: 3,
    title: "SILVER",
    amount: "GHS 35 MILLION",
    button: "PLAY FOR GHS 10",
    btnColor: colors.orange,
    image: megaJS,
  },
  {
    id: 4,
    title: "BRONZE",
    amount: "GHS 17.5 MILLION",
    button: "PLAY FOR GHS 5",
    btnColor: colors.bronze,
    image: megaJB,
  },
];
