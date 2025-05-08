"use client"

export const smoothScroll = (targetId: string) => {
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    })
  }
}
