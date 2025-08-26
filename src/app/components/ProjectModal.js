"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

function ProjectModal({ project, isOpen, onClose, onNavigateProject }) {
	const router = useRouter();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isCarouselExpanded, setIsCarouselExpanded] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isBackdropVisible, setIsBackdropVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	// Drag/swipe state
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);

	// Image loading state
	const [imageLoading, setImageLoading] = useState(true);

	// Handle fade-in and fade-out animations
	useEffect(() => {
		if (isOpen && !isClosing) {
			// Reset closing state and start fade-in
			setIsClosing(false);
			setIsBackdropVisible(true);
			// Start modal fade-in after a short delay
			setTimeout(() => {
				setIsModalVisible(true);
			}, 100);
			// Prevent background scrolling
			document.body.style.overflow = "hidden";
		} else if (isClosing) {
			// Start fade-out sequence
			setIsModalVisible(false);
			// Delay backdrop fade-out to allow modal to fade out first
			setTimeout(() => {
				setIsBackdropVisible(false);
			}, 300);
		} else {
			// Re-enable background scrolling when modal is closed
			document.body.style.overflow = "unset";
		}
	}, [isOpen, isClosing]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!isOpen) return;

			switch (e.key) {
				case "ArrowLeft":
					e.preventDefault();
					prevImage();
					break;
				case "ArrowRight":
					e.preventDefault();
					nextImage();
					break;
				case "ArrowUp":
					e.preventDefault();
					if (onNavigateProject) {
						setImageLoading(true);
						setTimeout(() => {
							onNavigateProject("prev");
						}, 50);
					}
					break;
				case "ArrowDown":
					e.preventDefault();
					if (onNavigateProject) {
						setImageLoading(true);
						setTimeout(() => {
							onNavigateProject("next");
						}, 50);
					}
					break;
				case "Escape":
					e.preventDefault();
					handleClose();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onNavigateProject]);

	// Use the images array if available, otherwise fall back to single image
	const projectImages = project.images || [
		{
			src: project.image,
			alt: `${project.title} - Main View`,
			description: "Main application interface showcasing the core functionality",
		},
	];

	function handleLink(link) {
		router.push(link);
	}

	function nextImage() {
		setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
	}

	function prevImage() {
		setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
	}

	function goToImage(index) {
		setCurrentImageIndex(index);
	}

	function toggleCarouselExpansion() {
		setIsCarouselExpanded(!isCarouselExpanded);
	}

	function navigateToPreviousProject() {
		if (onNavigateProject) {
			// Show loading state immediately
			setImageLoading(true);
			// Small delay to ensure loading state is visible
			setTimeout(() => {
				onNavigateProject("prev");
			}, 50);
		}
	}

	function navigateToNextProject() {
		if (onNavigateProject) {
			// Show loading state immediately
			setImageLoading(true);
			// Small delay to ensure loading state is visible
			setTimeout(() => {
				onNavigateProject("next");
			}, 50);
		}
	}

	function handleClose() {
		setIsClosing(true);
		// Call onClose after animation completes
		setTimeout(() => {
			onClose();
		}, 400);
	}

	// Image loading handlers
	const handleImageLoad = () => {
		setImageLoading(false);
	};

	const handleImageError = () => {
		setImageLoading(false);
	};

	// Reset loading state when image changes
	useEffect(() => {
		setImageLoading(true);
	}, [currentImageIndex]);

	// Reset to first image and show loading when project changes
	useEffect(() => {
		setCurrentImageIndex(0);
		setImageLoading(true);
	}, [project.id]);

	// Loading spinner component
	const LoadingSpinner = () => (
		<div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 rounded-lg">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
		</div>
	);

	// Drag/swipe handlers
	const handleDragStart = (e) => {
		const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
		const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
		setDragStart({ x: clientX, y: clientY });
		setIsDragging(true);
	};

	const handleDragMove = (e) => {
		if (!isDragging) return;
		const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
		const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
		setDragEnd({ x: clientX, y: clientY });
	};

	const handleDragEnd = () => {
		if (!isDragging) return;

		const deltaX = dragStart.x - dragEnd.x;
		const deltaY = dragStart.y - dragEnd.y;
		const minSwipeDistance = 50; // Minimum distance for a swipe

		// Check if it's a horizontal swipe (more horizontal than vertical)
		if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
			if (deltaX > 0) {
				// Swipe left - next image
				nextImage();
			} else {
				// Swipe right - previous image
				prevImage();
			}
		}

		setIsDragging(false);
		setDragStart({ x: 0, y: 0 });
		setDragEnd({ x: 0, y: 0 });
	};

	if (!isOpen && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl transition-opacity duration-300 ${
				isBackdropVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={handleClose}>
			<div
				className={`relative w-full max-h-[90vh] modal-glass-bg rounded-2xl overflow-hidden transition-all duration-500 transform ${
					isCarouselExpanded ? "max-w-full h-full" : "max-w-6xl"
				} ${isModalVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
				onClick={(e) => e.stopPropagation()}>
				{/* Header */}
				<div className={`flex items-center justify-between p-6 ${isCarouselExpanded ? "hidden" : ""}`}>
					<h2 className="text-2xl font-bold text-slate-100">{project.title}</h2>
					{!isCarouselExpanded && (
						<div className="flex items-center gap-2">
							<button
								onClick={navigateToPreviousProject}
								className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 15l7-7 7 7"
									/>
								</svg>
							</button>
							<button
								onClick={navigateToNextProject}
								className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<button
								onClick={handleClose}
								className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200">
								<IoClose size={24} />
							</button>
						</div>
					)}
				</div>

				{/* Expanded Carousel View */}
				{isCarouselExpanded && (
					<div className="relative w-full h-full flex flex-col">
						{/* Expanded Header */}
						<div className="flex items-center justify-between p-4 border-b border-slate-700/50">
							<h2 className="text-xl font-bold text-slate-100">{project.title}</h2>
							<button
								onClick={toggleCarouselExpansion}
								className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						{/* Expanded Image */}
						<div className="flex-1 relative p-4">
							<div
								className="relative w-full h-full bg-transparent rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
								onMouseDown={handleDragStart}
								onMouseMove={handleDragMove}
								onMouseUp={handleDragEnd}
								onMouseLeave={handleDragEnd}
								onTouchStart={handleDragStart}
								onTouchMove={handleDragMove}
								onTouchEnd={handleDragEnd}
								style={{ userSelect: "none" }}>
								{imageLoading && <LoadingSpinner />}
								<Image
									src={projectImages[currentImageIndex].src}
									alt={projectImages[currentImageIndex].alt}
									fill
									className="object-contain"
									loading="lazy"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									onLoad={handleImageLoad}
									onError={handleImageError}
								/>
								{/* Image overlay with description */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
									<p className="text-slate-200 text-sm">{projectImages[currentImageIndex].description}</p>
								</div>
							</div>

							{/* Navigation arrows for expanded view */}
							{projectImages.length > 1 && (
								<>
									<button
										onClick={(e) => {
											e.stopPropagation();
											prevImage();
										}}
										className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</button>
									<button
										onClick={nextImage}
										className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
								</>
							)}
						</div>

						{/* Thumbnail navigation for expanded view */}
						{projectImages.length > 1 && (
							<div className="flex gap-2 p-4 overflow-x-auto border-t border-slate-700/50 scrollbar-hide">
								{projectImages.map((image, index) => (
									<button
										key={index}
										onClick={() => goToImage(index)}
										className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
											index === currentImageIndex ? "border-teal-400" : "border-slate-600 hover:border-slate-400"
										}`}>
										<Image
											src={image.src}
											alt={image.alt}
											width={80}
											height={64}
											className="object-cover w-full h-full"
											loading="lazy"
											placeholder="blur"
											blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
										/>
									</button>
								))}
							</div>
						)}
					</div>
				)}

				{/* Regular Content */}
				{!isCarouselExpanded && (
					<div className="flex flex-col lg:flex-row h-full overflow-y-auto max-h-[calc(90vh-120px)] scrollbar-hide">
						{/* Mobile Layout - Single Column */}
						<div className="flex flex-col lg:hidden p-6 space-y-6">
							{/* Image carousel */}
							<div>
								<div
									className="relative aspect-video bg-transparent rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
									onClick={toggleCarouselExpansion}
									onMouseDown={handleDragStart}
									onMouseMove={handleDragMove}
									onMouseUp={handleDragEnd}
									onMouseLeave={handleDragEnd}
									onTouchStart={handleDragStart}
									onTouchMove={handleDragMove}
									onTouchEnd={handleDragEnd}
									style={{ userSelect: "none" }}>
									{/* Main image */}
									<div className="relative w-full h-full">
										{imageLoading && <LoadingSpinner />}
										<Image
											src={projectImages[currentImageIndex].src}
											alt={projectImages[currentImageIndex].alt}
											fill
											className="object-contain"
											loading="lazy"
											placeholder="blur"
											blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
											onLoad={handleImageLoad}
											onError={handleImageError}
										/>
									</div>

									{/* Navigation arrows */}
									{projectImages.length > 1 && (
										<>
											<button
												onClick={(e) => {
													e.stopPropagation();
													prevImage();
												}}
												className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 19l-7-7 7-7"
													/>
												</svg>
											</button>
											<button
												onClick={(e) => {
													e.stopPropagation();
													nextImage();
												}}
												className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</button>
										</>
									)}
								</div>

								{/* Thumbnail navigation */}
								{projectImages.length > 1 && (
									<div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
										{projectImages.map((image, index) => (
											<button
												key={index}
												onClick={() => goToImage(index)}
												className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
													index === currentImageIndex
														? "border-teal-400"
														: "border-slate-600 hover:border-slate-400"
												}`}>
												<Image
													src={image.src}
													alt={image.alt}
													width={64}
													height={48}
													className="object-cover w-full h-full"
													loading="lazy"
													placeholder="blur"
													blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
												/>
											</button>
										))}
									</div>
								)}

								{/* Image description */}
								<div className="mt-3 p-3 bg-slate-800/50 rounded-lg">
									<p className="text-slate-300 text-sm leading-relaxed">{projectImages[currentImageIndex].description}</p>
								</div>
							</div>

							{/* Description */}
							<div>
								<h3 className="text-lg font-semibold text-slate-100 mb-3">Description</h3>
								<div className="p-3 bg-slate-800/50 rounded-lg">
									<p className="text-slate-300 leading-relaxed">{project.description}</p>
								</div>
							</div>

							{/* Links */}
							<div>
								<h3 className="text-lg font-semibold text-slate-100 mb-3">Links</h3>
								<div className="flex flex-wrap gap-3">
									{project.link && (
										<button
											onClick={() => handleLink(project.link)}
											className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-200">
											<FaLink size={14} />
											{project.link_name}
										</button>
									)}
									{project.link2 && (
										<button
											onClick={() => handleLink(project.link2)}
											className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
											<FaLink size={14} />
											{project.link_name2}
										</button>
									)}
									{project.link3 && (
										<button
											onClick={() => handleLink(project.link3)}
											className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
											<FaLink size={14} />
											{project.link_name3}
										</button>
									)}
									{project.link4 && (
										<button
											onClick={() => handleLink(project.link4)}
											className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
											<FaLink size={14} />
											{project.link_name4}
										</button>
									)}
								</div>
							</div>

							{/* Technologies */}
							<div>
								<h3 className="text-lg font-semibold text-slate-100 mb-3">Technologies</h3>
								<div className="space-y-4">
									{/* Primary Technologies */}
									<div>
										<h4 className="text-sm font-medium text-slate-300 mb-2">Primary</h4>
										<div className="flex flex-wrap gap-2">
											{project.new_tech.map((tech, index) => (
												<span
													key={index}
													className="px-3 py-1 bg-teal-900 text-teal-200 text-xs rounded-full bg-opacity-60">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Secondary Technologies */}
									<div>
										<h4 className="text-sm font-medium text-slate-300 mb-2">Secondary</h4>
										<div className="flex flex-wrap gap-2">
											{project.old_tech.map((tech, index) => (
												<span
													key={index}
													className="px-3 py-1 bg-cyan-950 text-cyan-200 text-xs rounded-full bg-opacity-60">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Desktop Layout - Side by Side */}
						<div className="hidden lg:flex flex-row w-full h-full">
							{/* Left side - Image carousel */}
							<div className="w-1/2 p-6 overflow-y-auto scrollbar-hide">
								<div
									className="relative aspect-video bg-transparent rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
									onClick={toggleCarouselExpansion}
									onMouseDown={handleDragStart}
									onMouseMove={handleDragMove}
									onMouseUp={handleDragEnd}
									onMouseLeave={handleDragEnd}
									onTouchStart={handleDragStart}
									onTouchMove={handleDragMove}
									onTouchEnd={handleDragEnd}
									style={{ userSelect: "none" }}>
									{/* Main image */}
									<div className="relative w-full h-full">
										{imageLoading && <LoadingSpinner />}
										<Image
											src={projectImages[currentImageIndex].src}
											alt={projectImages[currentImageIndex].alt}
											fill
											className="object-contain"
											loading="lazy"
											placeholder="blur"
											blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
											onLoad={handleImageLoad}
											onError={handleImageError}
										/>
									</div>

									{/* Navigation arrows */}
									{projectImages.length > 1 && (
										<>
											<button
												onClick={(e) => {
													e.stopPropagation();
													prevImage();
												}}
												className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 19l-7-7 7-7"
													/>
												</svg>
											</button>
											<button
												onClick={(e) => {
													e.stopPropagation();
													nextImage();
												}}
												className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</button>
										</>
									)}
								</div>

								{/* Thumbnail navigation */}
								{projectImages.length > 1 && (
									<div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
										{projectImages.map((image, index) => (
											<button
												key={index}
												onClick={() => goToImage(index)}
												className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
													index === currentImageIndex
														? "border-teal-400"
														: "border-slate-600 hover:border-slate-400"
												}`}>
												<Image
													src={image.src}
													alt={image.alt}
													width={64}
													height={48}
													className="object-cover w-full h-full"
													loading="lazy"
													placeholder="blur"
													blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
												/>
											</button>
										))}
									</div>
								)}

								{/* Image description */}
								<div className="mt-3 p-3 bg-slate-800/50 rounded-lg">
									<p className="text-slate-300 text-sm leading-relaxed">{projectImages[currentImageIndex].description}</p>
								</div>
							</div>

							{/* Right side - Project details */}
							<div className="w-1/2 p-6 space-y-6 overflow-y-auto scrollbar-hide">
								{/* Description */}
								<div>
									<h3 className="text-lg font-semibold text-slate-100 mb-3">Description</h3>
									<div className="p-3 bg-slate-800/50 rounded-lg">
										<p className="text-slate-300 leading-relaxed">{project.description}</p>
									</div>
								</div>

								{/* Links */}
								<div>
									<h3 className="text-lg font-semibold text-slate-100 mb-3">Links</h3>
									<div className="flex flex-wrap gap-3">
										{project.link && (
											<button
												onClick={() => handleLink(project.link)}
												className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-200">
												<FaLink size={14} />
												{project.link_name}
											</button>
										)}
										{project.link2 && (
											<button
												onClick={() => handleLink(project.link2)}
												className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
												<FaLink size={14} />
												{project.link_name2}
											</button>
										)}
										{project.link3 && (
											<button
												onClick={() => handleLink(project.link3)}
												className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
												<FaLink size={14} />
												{project.link_name3}
											</button>
										)}
										{project.link4 && (
											<button
												onClick={() => handleLink(project.link4)}
												className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-200">
												<FaLink size={14} />
												{project.link_name4}
											</button>
										)}
									</div>
								</div>

								{/* Technologies */}
								<div>
									<h3 className="text-lg font-semibold text-slate-100 mb-3">Technologies</h3>
									<div className="space-y-4">
										{/* Primary Technologies */}
										<div>
											<h4 className="text-sm font-medium text-slate-300 mb-2">Primary</h4>
											<div className="flex flex-wrap gap-2">
												{project.new_tech.map((tech, index) => (
													<span
														key={index}
														className="px-3 py-1 bg-teal-900 text-teal-200 text-xs rounded-full bg-opacity-60">
														{tech}
													</span>
												))}
											</div>
										</div>

										{/* Secondary Technologies */}
										<div>
											<h4 className="text-sm font-medium text-slate-300 mb-2">Secondary</h4>
											<div className="flex flex-wrap gap-2">
												{project.old_tech.map((tech, index) => (
													<span
														key={index}
														className="px-3 py-1 bg-cyan-950 text-cyan-200 text-xs rounded-full bg-opacity-60">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectModal;
