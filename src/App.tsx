import { Search, MessageSquare, User, Plus, Home, Compass, Bookmark, MessageCircle } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'iPhone 14 Pro 256G 深紫色 95 新',
    price: 6888,
    image: '/images/iphone-14-pro.jpg',
    seller: '数码达人',
    location: '北京',
    soldCount: 128
  },
  {
    id: 2,
    title: 'MacBook Pro 2021 M1 Pro 14 寸 16+512G',
    price: 10500,
    image: '/images/macbook-pro.jpg',
    seller: '程序员小王',
    location: '上海',
    soldCount: 45
  },
  {
    id: 3,
    title: 'Sony A7M4 微单相机 单机身 99 新',
    price: 15800,
    image: '/images/sony-camera_1776697446.png',
    seller: '摄影爱好者',
    location: '广州',
    soldCount: 23
  },
  {
    id: 4,
    title: '任天堂 Switch OLED 日版 红蓝手柄',
    price: 1680,
    image: '/images/nintendo-switch_1776697491.png',
    seller: '游戏玩家',
    location: '深圳',
    soldCount: 256
  },
  {
    id: 5,
    title: 'LV 经典款手提包 九九新 带包装',
    price: 8800,
    image: '/images/handbag.jpg',
    seller: '时尚达人',
    location: '杭州',
    soldCount: 67
  },
  {
    id: 6,
    title: '人体工学电竞椅 黑白调',
    price: 899,
    image: '/images/gaming-chair.jpg',
    seller: '电竞少年',
    location: '成都',
    soldCount: 189
  },
  {
    id: 7,
    title: '婴儿推车 可折叠 轻便出行',
    price: 580,
    image: '/images/baby-stroller_1776697468.png',
    seller: '宝妈小李',
    location: '武汉',
    soldCount: 342
  },
  {
    id: 8,
    title: 'Nike 跑鞋 42 码 几乎全新',
    price: 320,
    image: '/images/running-shoes_1776697530.png',
    seller: '运动达人',
    location: '西安',
    soldCount: 78
  }
]

const categories = [
  { name: '手机', icon: '📱' },
  { name: '电脑', icon: '💻' },
  { name: '服饰', icon: '👕' },
  { name: '家具', icon: '🪑' },
  { name: '数码', icon: '📷' },
  { name: '母婴', icon: '👶' },
  { name: '图书', icon: '📚' },
  { name: '游戏', icon: '🎮' },
  { name: '运动', icon: '⚽' },
  { name: '美妆', icon: '💄' },
]

function App() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-xianyu-bg/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">鱼</span>
              </div>
              <span className="text-xl font-bold text-primary hidden sm:block">闲鱼</span>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索闲置好物"
                className="search-input pl-10 bg-secondary"
              />
            </div>
            
            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 text-primary-foreground" />
              </button>
              <button className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors overflow-hidden">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="px-4 py-4 border-b border-border">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <div 
                className="category-icon bg-gradient-to-br from-primary/20 to-primary/5"
              >
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <main className="px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%23f5f5f5" width="200" height="200"/%3E%3Ctext fill="%23ccc" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E商品图片%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="product-title mb-2">{product.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="product-price">¥{product.price.toLocaleString()}</span>
                </div>
                <div className="seller-info">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="truncate">{product.seller}</span>
                  <span>·</span>
                  <span>{product.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border pb-safe">
        <div className="flex items-center justify-around">
          <div className="nav-item text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">首页</span>
          </div>
          <div className="nav-item">
            <Compass className="w-6 h-6" />
            <span className="text-xs font-medium">发现</span>
          </div>
          <div className="nav-item relative">
            <div className="w-12 h-12 -mt-4 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
              <Plus className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <div className="nav-item">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs font-medium">消息</span>
          </div>
          <div className="nav-item">
            <Bookmark className="w-6 h-6" />
            <span className="text-xs font-medium">我的</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App