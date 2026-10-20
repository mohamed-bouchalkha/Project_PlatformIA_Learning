"use client"
import { Link } from "react-router-dom"
import {
  MdAdminPanelSettings,
  MdClose,
  MdDashboard,
  MdLockOpen,
  MdLogout,
  MdPeople,
  MdSchool,
} from "react-icons/md"
import "./AdminSidebar.css"

const AdminSidebar = ({ isOpen, onClose, currentPath, user, onLogout }) => {
  // Déterminer si l'utilisateur est un super admin
  const isSuperAdmin = user?.is_super_admin === true

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: MdDashboard,
      label: "Tableau de bord",
      access: "all",
    },
    {
      path: "/admin/courses",
      icon: MdSchool,
      label: "Cours",
      access: "all",
    },
    {
      path: "/admin/students",
      icon: MdPeople,
      label: "Étudiants",
      access: "all",
    },
    {
      path: "/admin/accesses",
      icon: MdLockOpen,
      label: "Accès",
      access: "all",
    },
    {
      path: "/admin/manage-admins",
      icon: MdAdminPanelSettings,
      label: "Gestion Admins",
      access: "superadmin", // Réservé aux super admins
    },
  ]

  const filteredItems = menuItems.filter((item) => {
    if (item.access === "all") return true
    if (item.access === "superadmin" && isSuperAdmin) return true
    return false
  })

  return (
    <>
      {/* Overlay pour fermer la sidebar sur mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Administration</h3>
          <button className="close-sidebar" onClick={onClose} aria-label="Fermer le menu">
            <MdClose aria-hidden="true" />
          </button>
        </div>

        <div className="user-info">
          <div className="avatar">{user?.name?.charAt(0) || "A"}</div>
          <div className="user-details">
            <p className="user-name">{user?.name || "Admin"}</p>
            <p className="user-role">{isSuperAdmin ? "Super Administrateur" : "Administrateur"}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {filteredItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={currentPath === item.path ? "active" : ""} onClick={onClose}>
                  <item.icon className="sidebar-icon" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={onLogout}>
            <MdLogout className="sidebar-icon" aria-hidden="true" />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar
