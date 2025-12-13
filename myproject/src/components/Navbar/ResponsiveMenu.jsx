import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ResponsiveMenu = ({ title, link, setOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li className="list-none cursor-pointer">
      <div onClick={handleToggle} className="flex justify-between items-center">
        <Link
          to={link}
          className="font-semibold transition-all duration-300"
          onClick={() => setOpen((prev) => !prev)}
        >
          {title}
        </Link>
        
      </div>
      {isExpanded> 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
        >
        </motion.div>
      )}
    </li>
  )
}

export default ResponsiveMenu
