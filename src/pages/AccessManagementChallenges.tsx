
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Bot, 
  Clock, 
  Key, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Trophy,
  Target,
  Zap
} from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "E-commerce Agent Permissions",
    difficulty: "Beginner",
    description: "A shopping assistant agent needs access to product catalogs and customer order history, but should never access payment information.",
    situation: "Your AI shopping assistant 'ShopBot' helps customers find products and track orders. It needs to read product information and order status, but must be restricted from accessing sensitive payment data.",
    options: [
      { id: 'a', text: 'Grant full database access for efficiency', correct: false },
      { id: 'b', text: 'Allow read access to products and orders, deny payment tables', correct: true },
      { id: 'c', text: 'Give temporary admin access when needed', correct: false },
      { id: 'd', text: 'Let the agent request permissions as needed', correct: false }
    ],
    explanation: "Following the Principle of Least Privilege (PoLP), the agent should only have access to the specific data it needs. Payment information is sensitive and should be completely off-limits.",
    points: 100
  },
  {
    id: 2,
    title: "Dynamic Authorization Scenario",
    difficulty: "Intermediate",
    description: "A financial analysis agent should only access customer data during business hours and when processing legitimate requests.",
    situation: "Your 'FinanceBot' analyzes customer portfolios but should have time-based and context-aware access controls.",
    options: [
      { id: 'a', text: 'Grant 24/7 access for global customers', correct: false },
      { id: 'b', text: 'Implement time-based and request-context authorization', correct: true },
      { id: 'c', text: 'Use static role-based permissions', correct: false },
      { id: 'd', text: 'Allow access only with manual approval', correct: false }
    ],
    explanation: "Dynamic authorization adapts permissions based on context like time, location, and request nature. This provides security while maintaining functionality.",
    points: 150
  },
  {
    id: 3,
    title: "Ephemeral Credentials Challenge",
    difficulty: "Advanced",
    description: "A data processing agent needs temporary access to external APIs. How should credentials be managed?",
    situation: "Your 'DataSync' agent processes customer data from external sources every hour. It needs API credentials that should be short-lived and automatically refreshed.",
    options: [
      { id: 'a', text: 'Store permanent API keys in environment variables', correct: false },
      { id: 'b', text: 'Use short-lived tokens with automatic rotation', correct: true },
      { id: 'c', text: 'Share credentials between multiple agents', correct: false },
      { id: 'd', text: 'Hard-code credentials in the agent configuration', correct: false }
    ],
    explanation: "Ephemeral credentials reduce the blast radius if compromised. Short-lived tokens with automatic rotation provide security without operational overhead.",
    points: 200
  }
];

const AccessManagementChallenges = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});
  const [totalScore, setTotalScore] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const handleAnswerSelect = (scenarioId: number, optionId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [scenarioId]: optionId }));
  };

  const handleSubmitAnswer = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    const selectedOption = scenario?.options.find(opt => opt.id === selectedAnswers[scenarioId]);
    
    setShowResults(prev => ({ ...prev, [scenarioId]: true }));
    
    if (selectedOption?.correct && !completedChallenges.includes(scenarioId)) {
      setTotalScore(prev => prev + scenario.points);
      setCompletedChallenges(prev => [...prev, scenarioId]);
    }
  };

  const resetChallenge = (scenarioId: number) => {
    setSelectedAnswers(prev => ({ ...prev, [scenarioId]: '' }));
    setShowResults(prev => ({ ...prev, [scenarioId]: false }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container max-w-6xl py-8 md:py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Target className="h-12 w-12 text-orange-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">
            IAM Challenge Center
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Test your knowledge with real-world Identity and Access Management scenarios for Agentic AI. 
          Each challenge presents a practical situation you might encounter when securing autonomous agents.
        </p>
        
        <div className="flex items-center justify-center mt-6 space-x-6">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-orange-600" />
            <span className="font-semibold">Score: {totalScore}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold">Completed: {completedChallenges.length}/{scenarios.length}</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="challenges" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="challenges">Interactive Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard">Progress & Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="space-y-8">
          {scenarios.map((scenario) => {
            const isAnswered = showResults[scenario.id];
            const selectedOption = scenario.options.find(opt => opt.id === selectedAnswers[scenario.id]);
            const isCorrect = selectedOption?.correct;

            return (
              <Card key={scenario.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        {scenario.id}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{scenario.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {scenario.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getDifficultyColor(scenario.difficulty)}>
                        {scenario.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        <Zap className="h-3 w-3 mr-1" />
                        {scenario.points} pts
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <Bot className="h-4 w-4 mr-2" />
                        Scenario
                      </h4>
                      <p className="text-blue-800">{scenario.situation}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">What's the best approach?</h4>
                      <div className="space-y-3">
                        {scenario.options.map((option) => {
                          const isSelected = selectedAnswers[scenario.id] === option.id;
                          let cardClass = "border-2 cursor-pointer transition-all p-4 rounded-lg hover:bg-gray-50";
                          
                          if (isAnswered) {
                            if (option.correct) {
                              cardClass += " border-green-500 bg-green-50";
                            } else if (isSelected && !option.correct) {
                              cardClass += " border-red-500 bg-red-50";
                            } else {
                              cardClass += " border-gray-200 bg-gray-50 cursor-not-allowed";
                            }
                          } else {
                            cardClass += isSelected ? " border-orange-500 bg-orange-50" : " border-gray-200";
                          }

                          return (
                            <div
                              key={option.id}
                              className={cardClass}
                              onClick={() => !isAnswered && handleAnswerSelect(scenario.id, option.id)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex-1">{option.text}</span>
                                {isAnswered && (
                                  <div className="ml-2">
                                    {option.correct ? (
                                      <CheckCircle className="h-5 w-5 text-green-600" />
                                    ) : isSelected ? (
                                      <XCircle className="h-5 w-5 text-red-600" />
                                    ) : null}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {isAnswered && (
                      <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        <div className="flex items-start space-x-3">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                          )}
                          <div>
                            <h5 className={`font-semibold ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                              {isCorrect ? 'Correct!' : 'Not quite right'}
                            </h5>
                            <p className={`mt-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                              {scenario.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      {!isAnswered ? (
                        <Button 
                          onClick={() => handleSubmitAnswer(scenario.id)}
                          disabled={!selectedAnswers[scenario.id]}
                          className="modern-button"
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => resetChallenge(scenario.id)}
                          variant="outline"
                        >
                          Try Again
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-orange-600" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Score</span>
                    <span className="font-bold text-2xl text-orange-600">{totalScore}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Challenges Completed</span>
                    <span className="font-bold">{completedChallenges.length}/{scenarios.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(completedChallenges.length / scenarios.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-blue-600" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-4 w-4 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Learn Core Concepts</p>
                      <p className="text-sm text-muted-foreground">Master the fundamentals of Agentic IAM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-medium">Explore Real Challenges</p>
                      <p className="text-sm text-muted-foreground">Dive into production IAM scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Key className="h-4 w-4 text-purple-600 mt-1" />
                    <div>
                      <p className="font-medium">Best Practices Guide</p>
                      <p className="text-sm text-muted-foreground">Implement secure patterns in your systems</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Continue Your Learning Journey</CardTitle>
              <CardDescription>
                Ready to dive deeper into Agentic IAM? Explore our comprehensive resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/concepts" className="flex flex-col items-center space-y-2">
                    <Shield className="h-6 w-6" />
                    <span>Core Concepts</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/iam-challenges" className="flex flex-col items-center space-y-2">
                    <AlertTriangle className="h-6 w-6" />
                    <span>Real Challenges</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/best-practices" className="flex flex-col items-center space-y-2">
                    <Key className="h-6 w-6" />
                    <span>Best Practices</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccessManagementChallenges;
