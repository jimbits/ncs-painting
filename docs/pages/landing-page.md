# Landing Page



# Services Section
Split into three parts __Interior__, __Exterior__, __Specalty Services__

### Responsive 3 Column Layout
```html
<section className="services-section py-16">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-4">
							Our Edmonton Home Painting Services
						</h2>
						<p className="text-center text-gray-600 mb-12">
							From interior refreshes to exterior transformations
						</p>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="service-card bg-white rounded-lg shadow-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-blue-600">
									Interior House Painting Edmonton
								</h3>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="mr-2">🏠</span> Wall & ceiling painting
									</li>
									<li className="flex items-start">
										<span className="mr-2">🚪</span> Trim, baseboards & doors
									</li>
									<li className="flex items-start">
										<span className="mr-2">🎨</span> Cabinet refinishing
									</li>
								</ul>
							</div>

							<div className="service-card bg-white rounded-lg shadow-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-green-600">
									Exterior Home Painting Services
								</h3>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="mr-2">🏡</span> House siding painting
									</li>
									<li className="flex items-start">
										<span className="mr-2">🚪</span> Garage doors & entries
									</li>
									<li className="flex items-start">
										<span className="mr-2">🏗️</span> Decks & fence staining
									</li>
								</ul>
							</div>

							<div className="service-card bg-white rounded-lg shadow-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-purple-600">
									Specialty Painting Services
								</h3>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="mr-2">🌿</span> Eco-friendly paints
									</li>
									<li className="flex items-start">
										<span className="mr-2">📋</span> Popcorn ceiling removal
									</li>
									<li className="flex items-start">
										<span className="mr-2">🎯</span> Color consultations
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
```


```html
<section class="services-section">
					<h2>Our Edmonton Home Painting Services</h2>
					<p>
						From interior refreshes to exterior transformations, we provide complete home painting
						solutions.
					</p>

					<div className="service-grid">
						<div className="service-category">
							<h3>Interior House Painting Edmonton</h3>
							<ul className="service-list">
								<li>🏠 Wall & ceiling painting</li>
								<li>🚪 Trim, baseboards & doors</li>
								<li>🎨 Cabinet refinishing</li>
								<li>✨ Accent & feature walls</li>
								<li>🔧 Drywall repair & prep</li>
							</ul>
						</div>

						<div className="service-category">
							<h3>Exterior Home Painting Services</h3>
							<ul className="service-list">
								<li>🏡 House siding painting</li>
								<li>🚪 Garage doors & front doors</li>
								<li>🏗️ Decks & fence staining</li>
								<li>🧽 Pressure washing</li>
								<li>⚒️ Wood repair & prep</li>
							</ul>
						</div>

						<div className="service-category">
							<h3>Specialty Painting Services</h3>
							<ul className="service-list">
								<li>🏢 New construction</li>
								<li>🌿 Eco-friendly paints</li>
								<li>📋 Popcorn ceiling removal</li>
								<li>🗞️ Wallpaper removal</li>
								<li>🎯 Color consultations</li>
							</ul>
						</div>
					</div>
				</section>

```