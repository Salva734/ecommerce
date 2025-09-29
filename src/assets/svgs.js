import { PiCpuBold } from 'react-icons/pi'
import { BsGpuCard } from 'react-icons/bs'
import { PiMemoryFill } from "react-icons/pi";
import { FaHdd } from "react-icons/fa";
import { SiPcgamingwiki } from "react-icons/si";
import { ImPowerCord } from "react-icons/im";
import { BsFillMotherboardFill } from "react-icons/bs";
import { GiKeyboard } from "react-icons/gi";

const icons = [
  {
    name: "CPU's",
    icon: PiCpuBold,
  },
  {
    name: "GPU's",
    icon: BsGpuCard,
  },
  {
    name: "RAM's",
    icon: PiMemoryFill
  },
  {
    name: "SSD's",
    icon: FaHdd
  },
  {
    name: "Cases",
    icon: SiPcgamingwiki
  },
  {
    name: "PSU's",
    icon: ImPowerCord
  },
  {
    name: "Motherboards",
    icon: BsFillMotherboardFill
  },
  {
    name: 'Peripherals',
    icon: GiKeyboard
  }
]

export default icons
