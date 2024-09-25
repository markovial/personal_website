"use strict";(self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[]).push([[262],{4262:function(e,n,t){t.r(n),n["default"]="\x3c!-- level: 1 --\x3e\n\n## Agents\n\nAn RL agent is an entity that interacts with an environment to learn optimal behavior.\n\nBut what exactly constitutes an agent? Let's break it down mathematically:\n\n$$ A = (S, A, \\pi, \\gamma) $$\n\nWhere:\n- $S$: State Space\n- $A$: Action Space\n- $\\pi$: Policy (learned)\n- $\\gamma$: Discount Factor\n\nThis tuple represents the core components of an agent. But what do each of these mean, and how do they work together?\n\n### State Space\n\nThe state space $S$ is the set of all possible situations the agent might encounter:\n\n$$ S = \\{s_1, s_2, s_3, \\ldots, s_n\\} $$\n\nEach $s_i$ represents a unique state. Think of it as the agent's perception of its environment at any given moment. For example, in a chess game, a state would be the current configuration of all pieces on the board.\n\nBut how does the agent interact with its environment based on these states?\n\n### Action Space\n\nThe action space $A$ is the set of all possible actions the agent can take:\n\n$$ A = \\{a_1, a_2, a_3, \\ldots, a_m\\} $$\n\nEach $a_j$ represents a unique action. Continuing our chess example, an action would be moving a specific piece to a specific square.\n\nNow that we know what the agent can perceive (states) and what it can do (actions), how does it decide which action to take in each state?\n\n### Policy\n\nThe policy $\\pi$ is the agent's strategy, mapping states to actions:\n\n$\\pi: S \\rightarrow A$\n\nIt can be:\n1. Deterministic: $a_t = \\mu(s_t)$\n2. Stochastic: $a_t \\sim \\pi(\\cdot | s_t)$\n\nA deterministic policy always chooses the same action for a given state, while a stochastic policy assigns probabilities to actions.\n\nBut why would an agent choose one action over another? This brings us to the concept of rewards and long-term planning.\n\n### Discount Factor\n\nThe discount factor $\\gamma$ determines how much the agent values future rewards compared to immediate ones:\n\n$$ 0 \\leq \\gamma \\leq 1 $$\n\nA higher $\\gamma$ means the agent is more forward-thinking, valuing future rewards more heavily. This is crucial because in many scenarios, the best long-term strategy might involve sacrificing immediate rewards for greater future gains.\n\nNow that we understand the basic components of an agent, how does it actually learn and improve its behavior?\n\n### Learning Process\n\nAgents learn through interaction with their environment. This process is guided by a learning algorithm (L). We can expand our agent tuple to include this:\n\n$$ A = (S, A, \\pi, \\gamma, L) $$\n\nBut what does it mean for an agent to \"learn\"? In essence, learning in RL typically involves updating the policy $\\pi$ or estimating value functions (which we'll discuss later). This often translates to adjusting parameters in neural networks or other function approximators.\n\nDifferent types of agents use different learning algorithms. For example, in Q-learning:\n\n$$ Q(s, a) \\leftarrow Q(s, a) + \\alpha [R_{t+1} + \\gamma \\max_{a'} Q(S_{t+1}, a') - Q(s, a)] $$\n\nThis update rule adjusts the estimated value of taking action $a$ in state $s$ based on the reward received and the estimated value of the next state.\n\nBut how does the agent know if it's doing well or poorly? This brings us to the concept of rewards.\n\n### Reward\n\nTo learn, agents need feedback. This comes in the form of a reward function:\n\n$$ R: S \\times A \\times S \\rightarrow \\mathbb{R} $$\n\nThe reward function assigns a numerical value to the transition from one state to another after taking an action:\n\n$$ r_t = R(s_t, a_t, s_{t+1}) $$\n\nThis is how the environment communicates to the agent whether its actions are good or bad.\n\nGiven this feedback mechanism, how do we measure the overall performance of an agent?\n\n### Measuring Agent Performance\n\nWe typically measure agent performance by the expected cumulative reward:\n\n$$ \\text{Performance}(A) = \\mathbb{E} \\left[ \\sum_{t=0}^{T} \\gamma^t R_t \\right] $$\n\nWe use the expected value because the environment and/or the agent's policy might be stochastic, leading to different outcomes even with the same starting conditions. We sum the rewards because we're interested in the agent's performance over time, not just in a single moment.\n\nBut how does the agent estimate the long-term value of its actions? This brings us to the concept of value functions.\n\n\n### Value Functions\n\nAgents often learn value functions to estimate the long-term reward of being in a state or taking an action:\n\n1. State-Value Function: $V: S \\rightarrow \\mathbb{R}$\n   $$ V(s) = \\mathbb{E}[G_t | S_t = s] = \\mathbb{E} \\left[ \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1} \\Bigg| S_t = s \\right] $$\n\n2. Action-Value Function: $Q: S \\times A \\rightarrow \\mathbb{R}$\n   $$ Q(s, a) = \\mathbb{E}[G_t | S_t = s, A_t = a] = \\mathbb{E} \\left[ \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1} \\Bigg| S_t = s, A_t = a \\right] $$\n\nThe key difference is that the state-value function $V(s)$ estimates the expected return from being in state $s$ and following the current policy thereafter, while the action-value function $Q(s,a)$ estimates the expected return from taking action $a$ in state $s$ and then following the current policy.\n\nNow that we understand these fundamental concepts, let's explore different types of RL agents and how they approach the learning problem.\n\n\n\n\x3c!-- level: 3 --\x3e\n### Types of RL Agents\n\nRL algorithms can be categorized in several ways. One fundamental distinction is between model-based and model-free methods:\n\n#### Model-Based Agents\n\nThese agents learn a model of their environment:\n\n$$ A_{mb} = (S, A, \\hat{R}, \\hat{P}, \\pi: S \\rightarrow A, \\gamma, L_{mb}, PA) $$\n\nWhere:\n- $\\hat{R}: S \\times A \\times S \\rightarrow \\mathbb{R}$: Estimated Reward Function\n- $\\hat{P}: S \\times A \\times S \\rightarrow [0, 1]$: Estimated Transition Probability Function\n- $PA$: Planning Algorithm\n\nModel-based agents try to learn how the environment works ($\\hat{P}$ and $\\hat{R}$) and use this knowledge to plan their actions.\n\n#### Model-Free Agents\n\nThese agents learn directly from experience without building an explicit model:\n\n$$ A_{mf} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{mf}) $$\n\nModel-free agents focus on learning values or policies directly from experience, without trying to model the environment's dynamics.\n\nAnother important distinction is between value-based and policy-based methods:\n\n#### Value-Based Agents\n\nThese agents learn a value function (either V or Q) and derive their policy from it:\n\n$$ A_{value} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{value}, V: S \\rightarrow \\mathbb{R}) $$\nor\n$$ A_{value} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{value}, Q: S \\times A \\rightarrow \\mathbb{R}) $$\n\n#### Policy-Based Agents\n\nThese agents directly learn a policy without necessarily learning a value function:\n\n$$ A_{policy} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{policy}) $$\n\n#### Actor-Critic Agents\n\nThese combine aspects of both value-based and policy-based methods:\n\n$$ A_{ac} = (S, A, \\pi, \\gamma, \\pi_{actor}: S \\rightarrow A, V_{critic}: S \\rightarrow \\mathbb{R}, L_{ac}) $$\n\nActor-Critic methods maintain both a policy (the actor) and a value function (the critic), using the critic to update the actor.\n\nFinally, we can distinguish between on-policy and off-policy methods:\n\n#### On-Policy Agents\n\nThese agents learn about the policy they're currently following:\n\n$$ A_{on\\_policy} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{on\\_policy}) $$\n\n#### Off-Policy Agents\n\nThese agents can learn about a policy different from the one they're following:\n\n$$ A_{off\\_policy} = (S, A, \\pi: S \\rightarrow A, \\gamma, L_{off\\_policy}) $$\n\nUnderstanding these different types of agents and algorithms is crucial for choosing the right approach for a given problem. But how can we improve the performance of these agents?\n\n#### Improving Agent Performance\n\nThere are several strategies for enhancing agent performance:\n\n1. Better Learning Algorithms: For example, Double Q-learning to reduce overestimation bias:\n\n   $$ Q_1(s, a) \\leftarrow Q_1(s, a) + \\alpha [r + \\gamma Q_2(s', \\arg\\max_{a'} Q_1(s', a')) - Q_1(s, a)] $$\n   $$ Q_2(s, a) \\leftarrow Q_2(s, a) + \\alpha [r + \\gamma Q_1(s', \\arg\\max_{a'} Q_2(s', a')) - Q_2(s, a)] $$\n\n2. Experience Replay: Storing and reusing past experiences to improve sample efficiency.\n\n3. Prioritized Experience Replay: Sampling important experiences more frequently:\n\n   $$ P(i) = \\frac{|\\delta_i| + \\epsilon}{\\sum_k (|\\delta_k| + \\epsilon)} $$\n\n   Where $P(i)$ is the probability of sampling experience $i$, $\\delta_i$ is the TD error of experience $i$, and $\\epsilon$ is a small constant.\n\n4. Function Approximation: Using neural networks to handle large state spaces.\n\n5. Exploration Strategies: Balancing exploration and exploitation to discover optimal policies.\n\nThese techniques help address various challenges in RL, such as sample efficiency, stability of learning, and scalability to complex environments.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\x3c!-- level: 1 --\x3e\n\n## Environments\n\nIn reinforcement learning (RL), an environment is the external system in which an agent operates and interacts. But how do we formally define this concept? An environment in RL can be represented as a tuple:\n\n$$ \\mathcal{E} = (\\mathcal{S}, \\mathcal{A}, \\mathcal{R}, \\mathcal{P}) $$\n\nWhere:\n- $\\mathcal{S}$: Set of all possible states\n- $\\mathcal{A}$: Set of all possible actions\n- $\\mathcal{R}$: Reward function\n- $\\mathcal{P}$: Transition probability function\n\nHow does this environment definition relate to agents? Agents are:\n\n$$ \\mathcal{A} = (S, A, \\pi, \\gamma, L) $$\n\nThe environment $\\mathcal{E}$ defines the rules and dynamics, while the agent $\\mathcal{A}$ defines the decision-making entity. The agent operates within the constraints set by the environment.\n\nNow that we understand the basic structure of an environment, let's delve deeper into each component.\n\n### States\n\nWhat exactly is a state in RL? The state space $\\mathcal{S}$ represents all possible situations the environment can be in:\n\n$$ \\mathcal{S} = \\{s_1, s_2, s_3, \\ldots\\} $$\n\nEach state $s \\in \\mathcal{S}$ provides a complete description of the environment at a particular moment in time. It includes all the information necessary for the agent to make a decision.\n\nBut this raises an important question: Can the agent always perceive the complete state of the environment?\n\nI think s in S should be s_i in S right?\n\nCan I get an example or analogy for the difference between state and environment?\n\nIs state basically the full environment at a particular time t?\n\n### Observations\n\nIn many real-world scenarios, the agent cannot directly access the full state of the environment. Instead, it receives an observation $o$, which is partial information about the environment's state:\n\n$$ o = f(s), \\text{ where } o \\subseteq s \\text{ and } s \\in \\mathcal{S} $$\n\nHere, $f$ is a function that maps the true state to an observation, potentially losing information in the process.\n\nThis distinction between states and observations leads us to an important concept in RL: the difference between the true environment and the agent's perception.\n\nWhy is o lowercase? Is it because just like we have s_i in S we have o_i in O where O is a subset of S?\n\nMake the function consistent with full RL defn.\n\n### The True Environment vs. Agent's Perception\n\nHow does what the agent perceives differ from the actual state of the environment? This concept is similar to the distinction between $y$ (true value) and $\\hat{y}$ (estimated value) in supervised learning or statistics.\n\n### True Environment (y):\n\n$$ \\mathcal{E} = (\\mathcal{S}, \\mathcal{A}, \\mathcal{R}, \\mathcal{P}) $$\n\n### Agent's Perception (ŷ):\n- Observations: $o = f(s)$, where $s \\in \\mathcal{S}$\n- Learned World Model: $M = (\\hat{\\mathcal{S}}, \\mathcal{A}, \\hat{\\mathcal{R}}, \\hat{\\mathcal{P}})$\n\nThe agent must learn and make decisions based on its observations and learned model, which may not perfectly reflect the true environment.\n\nThis could use an analogy, example, more explanation.\n\nBut how does the agent interact with this environment over time?\n\n\n\n\n### Actions\n\nThe action space $\\mathcal{A}$ represents all possible actions an agent can take:\n\n$$ \\mathcal{A} = \\{a_1, a_2, a_3, \\ldots\\} $$\n\nActions can be:\n1. Discrete: $\\mathcal{A} = \\{a_1, a_2, a_3, \\ldots\\}$\n2. Continuous: $\\mathcal{A} = \\{a \\in \\mathbb{R}^n \\mid a_{\\text{min}} \\leq a \\leq a_{\\text{max}}\\}$\n\nThe nature of the action space significantly impacts how the agent learns and makes decisions. But what happens after the agent takes an action?\n\n### Transitions\n\nThe transition probability function $\\mathcal{P}$ defines how the environment changes in response to the agent's actions:\n\n$$ \\mathcal{P}: \\mathcal{S} \\times \\mathcal{A} \\times \\mathcal{S} \\rightarrow [0, 1] $$\n\nIt gives the probability of moving from one state to another given an action. Transitions can be:\n\n1. Deterministic: $s_{t+1} = f(s_t, a_t)$\n2. Stochastic: $s_{t+1} \\sim \\mathcal{P}(\\cdot | s_t, a_t)$\n\nHere, $s_{t+1}$ (also sometimes denoted as $s'$) represents the next state after taking action $a_t$ in state $s_t$.\n\nBut how does the agent know if its actions are good or bad?\n\nWhy are transitions probabilistic?\n\n### Rewards\n\nThe reward function $\\mathcal{R}$ provides feedback to the agent about its actions:\n\n$$ \\mathcal{R}: \\mathcal{S} \\times \\mathcal{A} \\times \\mathcal{S} \\rightarrow \\mathbb{R} $$\n\nIt assigns a numerical value to the transition from one state to another after taking an action:\n\n$$ r_t = \\mathcal{R}(s_t, a_t, s_{t+1}) $$\n\nThis feedback is crucial for the agent to learn which actions are beneficial and which are not.\n\nNow that we understand the basic components of an environment, how do they work together over time?\n\n### Trajectory and History\n\nAs the agent interacts with the environment, it generates a sequence of states, actions, and rewards. This sequence can be viewed from two perspectives:\n\n### Trajectory:\n\nA trajectory $\\tau$ represents a specific sequence of true states and actions:\n$$ \\tau = (s_0, a_0, s_1, a_1, \\ldots, s_T) $$\n\n### History:\n\nHistory $h_t$ captures the sequence of observations, actions, and rewards up to time $t$:\n$$ h_t = (o_0, a_0, r_1, o_1, a_1, r_2, \\ldots, o_t) $$\n\nThe key difference is that trajectory deals with true states (often unknown to the agent), while history deals with observations (what the agent actually perceives).\n\nIs this distinction between trajectory and history actually true? Or how these words are commonly used in literature?\n\nBut how does the past influence the future in RL environments?\n\n\x3c!-- level: 3 --\x3e\n## Memory\n\nIf we have a history, we need some way to represent what we/the agent remembers and what it doesn't. The agent can internally keep a track of the history or just infer it from the environment through observation.\n\n## Markov Property\n\nThe Markov property states that the future depends only on the current state, not on the history:\n\n$$ P(s_{t+1} | s_t, a_t) = P(s_{t+1} | s_1, a_1, s_2, a_2, \\ldots, s_t, a_t) $$\n\nThis property leads to two important types of decision processes:\n\nWhat is a decision process?\n\n\n### Markov Decision Processes (MDPs):\nIn fully observable MDPs, the current observation (which equals the true state) is sufficient for optimal decision-making.\n\n### Partially Observable Markov Decision Processes (POMDPs):\nIn POMDPs, the true state is Markovian, but the observations are not. The agent must use history to infer the current state, often through a belief state:\n\n$$ b(s) = P(s | h_t) $$\n\nHow does this distinction affect the agent's decision-making process?\n\n\n## History Part 2\n\n### In MDPs:\nTheoretically, the current state is sufficient, and history is not needed for optimal decision-making. However, history can still be useful for learning and updating the policy or value function.\n\n### In POMDPs:\nHistory is crucial for maintaining a belief state and making informed decisions. The agent uses history to approximate the true state:\n\n$$ \\hat{s}_t = g(h_t) $$\n\nWhere $g$ is a function that estimates the current state based on history, often implemented through recurrent neural networks or other memory mechanisms.\n\nBut how can an agent use its experiences to build a model of the environment?\n\n\n## World Models\n\nThe world model $M = (\\hat{\\mathcal{S}}, \\mathcal{A}, \\hat{\\mathcal{R}}, \\hat{\\mathcal{P}})$ is the agent's learned approximation of the true environment $\\mathcal{E}$.\n\nLearning the World Model:\nThe agent uses its history of interactions to learn the world model:\n\n$$ \\hat{\\mathcal{P}}(s_{t+1}|s_t,a_t) \\approx \\frac{\\text{count}(s_t, a_t, s_{t+1})}{\\text{count}(s_t, a_t)} $$\n$$ \\hat{\\mathcal{R}}(s_t, a_t) \\approx \\frac{\\sum_{(s_t, a_t, r_t) \\in \\text{history}} r_t}{\\text{count}(s_t, a_t)} $$\n\nUsing the World Model:\nThe learned model allows the agent to simulate trajectories and plan actions without interacting with the true environment.\n\nHow do all these components come together in the agent's decision-making process?\n\n## 12. Connecting the Dots: From Observations to Decision-Making\n\n1. The agent receives an observation $o_t = f(s_t)$ of the true state $s_t$.\n2. It updates its history: $h_t = h_{t-1} \\cup (o_t, a_{t-1}, r_t)$.\n3. In POMDPs, it updates its belief state: $b(s) = P(s | h_t)$.\n4. It uses its policy $\\pi$, which may depend on the history or belief state, to choose an action: $a_t = \\pi(h_t)$ or $a_t = \\pi(b(s))$.\n5. The environment transitions to a new true state according to $\\mathcal{P}(s_{t+1}|s_t, a_t)$.\n6. The cycle repeats, generating a trajectory in the true environment and a history from the agent's perspective.\n\n\n## The Interplay of Environments and Agents\n\nUnderstanding RL environments involves grasping the distinction between the true environment and the agent's perception and learning. The concepts of states, observations, actions, transitions, rewards, history, and trajectories are all interconnected, each playing a crucial role in how the agent learns and makes decisions in the face of uncertainty and partial observability.\n\nDifferent types of agents (value-based, policy-based, model-based) are designed to excel in different types of environments (fully observable, partially observable, deterministic, stochastic). The environment provides the context, rules, and feedback, while the agent develops strategies to maximize its performance within these constraints.\n\n"}}]);
//# sourceMappingURL=262.582dd4f3.js.map