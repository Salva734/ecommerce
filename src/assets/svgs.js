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
    categoryId: '1'
  },
  {
    name: "GPU's",
    icon: BsGpuCard,
    categoryId: '2'
  },
  {
    name: "RAM's",
    icon: PiMemoryFill,
    categoryId: '3'
  },
  {
    name: "SSD's",
    icon: FaHdd,
    categoryId: '4'
  },
  {
    name: "Cases",
    icon: SiPcgamingwiki,
    categoryId: '5'
  },
  {
    name: "PSU's",
    icon: ImPowerCord,
    categoryId: '6'
  },
  {
    name: "Motherboards",
    icon: BsFillMotherboardFill,
    categoryId: '7'
  },
  {
    name: 'Peripherals',
    icon: GiKeyboard,
    categoryId: '8'
  }
]

export default icons
