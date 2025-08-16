import React from 'react'
import { ShoppingBag, Phone, MapPin, Clock, Star, Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">肉夹馍纸袋</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">首页</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">菜单</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">关于我们</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">联系我们</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              传统美味
              <span className="text-orange-600">肉夹馍</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              采用传统工艺制作，精选上等食材，为您提供最正宗的陕西肉夹馍体验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                立即订购
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                查看菜单
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">传统工艺</h3>
              <p className="text-gray-600">传承百年制作工艺，每一口都是经典味道</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">优质食材</h3>
              <p className="text-gray-600">精选上等猪肉和新鲜蔬菜，确保品质</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">快速服务</h3>
              <p className="text-gray-600">现点现做，5分钟内即可享用美味</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的菜单</h2>
            <p className="text-gray-600">多种口味，满足您的不同需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">经典肉夹馍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">经典肉夹馍</h3>
                <p className="text-gray-600 mb-4">传统配方，肥瘦相间的猪肉，配以秘制调料</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">¥12</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">素菜肉夹馍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">素菜肉夹馍</h3>
                <p className="text-gray-600 mb-4">新鲜蔬菜配以特制酱料，健康美味</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">¥10</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">辣味肉夹馍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">辣味肉夹馍</h3>
                <p className="text-gray-600 mb-4">加入特制辣椒酱，麻辣鲜香，回味无穷</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">¥14</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h2>
              <p className="text-gray-600 mb-4">
                肉夹馍纸袋成立于2020年，我们致力于为顾客提供最正宗的陕西肉夹馍。
                每一份肉夹馍都采用传统工艺制作，精选上等食材，确保每一口都是经典味道。
              </p>
              <p className="text-gray-600 mb-6">
                我们的师傅都经过严格的培训，传承了百年制作工艺，只为给您带来最地道的陕西美食体验。
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">1000+</div>
                  <div className="text-gray-600">满意顾客</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600">每日销量</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.8</div>
                  <div className="text-gray-600">平均评分</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">传统工艺展示</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">有任何问题或建议，欢迎随时联系我们</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">联系信息</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">400-123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">北京市朝阳区某某街道123号</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">周一至周日 7:00-22:00</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">在线留言</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <textarea
                  placeholder="您的留言"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  发送留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-6 w-6 text-orange-600 mr-2" />
                <span className="text-xl font-bold">肉夹馍纸袋</span>
              </div>
              <p className="text-gray-400">
                传承百年工艺，为您提供最正宗的陕西肉夹馍体验。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">菜单</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">营业时间</h4>
              <ul className="space-y-2 text-gray-400">
                <li>周一至周五: 7:00-22:00</li>
                <li>周六至周日: 8:00-21:00</li>
                <li>节假日: 7:00-23:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">微信</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">微博</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">抖音</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 肉夹馍纸袋. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
