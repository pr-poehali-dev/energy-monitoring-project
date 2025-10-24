import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  const metrics = [
    { value: "-24.6", unit: "kWh", label: "Общее потребление", trend: "down" },
    { value: "156.8", unit: "kWh", label: "Пиковая нагрузка", trend: "up" },
    { value: "98.2", unit: "%", label: "Эффективность", trend: "up" },
    { value: "12", unit: "Отелей", label: "Активных объектов", trend: "neutral" }
  ];

  const features = [
    {
      icon: "Activity",
      title: "Мониторинг в реальном времени",
      description: "Отслеживайте потребление электроэнергии по каждому майнинговому отелю в режиме онлайн"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и отчеты",
      description: "Детальные отчеты по потреблению, анализ трендов и прогнозирование расходов"
    },
    {
      icon: "Bell",
      title: "Система оповещений",
      description: "Автоматические уведомления при превышении лимитов или аномалиях в потреблении"
    },
    {
      icon: "Settings",
      title: "Управление нагрузкой",
      description: "Оптимизация распределения нагрузки между объектами для снижения затрат"
    }
  ];

  const results = [
    { value: "35%", label: "Снижение затрат на электроэнергию" },
    { value: "99.9%", label: "Точность учета показаний" },
    { value: "24/7", label: "Круглосуточный мониторинг" },
    { value: "<2 мин", label: "Время реакции на аномалии" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold text-card">яЭнергетик</span>
          </div>
          <Button size="lg" className="bg-primary hover:bg-secondary text-white font-semibold">
            Войти в систему
          </Button>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-card mb-6 leading-tight">
              Интеллектуальный учет электроэнергии
              <span className="block text-primary mt-2">для майнинговых отелей</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Система АСКУЭ для точного мониторинга, анализа и оптимизации потребления электроэнергии на ваших объектах
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 h-12">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Попробовать демо
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-2">
                Связаться с нами
              </Button>
            </div>
          </div>

          <Card className="bg-card text-card-foreground shadow-2xl border-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-5xl font-mono font-bold">{metric.value}</span>
                      <span className="text-2xl font-mono text-muted ml-2">{metric.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                    {metric.trend === "up" && (
                      <Icon name="TrendingUp" size={16} className="absolute top-2 right-0 text-accent" />
                    )}
                    {metric.trend === "down" && (
                      <Icon name="TrendingDown" size={16} className="absolute top-2 right-0 text-destructive" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-card mb-4">
              Функционал АСКУЭ для коммерческого учета
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный набор инструментов для эффективного управления электропотреблением
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-card mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card text-card-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Результаты внедрения АСКУЭ яЭнергетик
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Измеримые показатели эффективности для ваших объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {results.map((result, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 font-mono">{result.value}</div>
                <p className="text-sm text-muted-foreground font-medium">{result.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 h-12">
              Запросить расчет экономии
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы оптимизировать расходы на электроэнергию?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для индивидуальной демонстрации системы и расчета эффективности
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="h-12 px-8 bg-white text-primary hover:bg-slate-100">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-2 border-white text-white hover:bg-white/10">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card text-card-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="text-lg font-bold">яЭнергетик</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Передовая система учета электроэнергии для майнинговых отелей
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@yaenergetik.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-35-35</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Документы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Политика конфиденциальности</div>
                <div>Пользовательское соглашение</div>
                <div>Техническая документация</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-muted-foreground">
            © 2025 яЭнергетик. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
