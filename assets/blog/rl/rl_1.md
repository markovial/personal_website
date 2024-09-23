Tags:  [[Game Theory]], [[Information Theory]],  [[Artificial Intelligence]]



Markov assumption/Property
\[ P(s_{t+1} | h_t, a_t) = P(s_{t+1} | s_t, a_t) \] where \( h_t \) is the history up to time \( t \), \( s_t \) is the current state, \( a_t \) is the action taken, and \( s_{t+1} \) is the next state.

AI that learns how to make decisions by performing actions and receiving feedback in the form of rewards or punishments.

What are state visit distributions?
What is a visit distribution function?
What is a POMDP?

State transition matrix:
A state transition matrix in reinforcement learning is a table that describes the probabilities of transitioning from one state to another given a particular action. Each row represents a current state, each column represents a possible next state, and each cell contains the probability of moving to the next state from the current state when an action is taken. This matrix helps in modeling the dynamics of the environment, allowing for the prediction of future states based on current actions.

State transition matrices can be predefined in environments with known dynamics, or they can be learned from interactions with the environment in more complex or unknown settings. The elements of the matrix are probabilities, not weights or learned parameters in the traditional sense of neural network weights. However, in environments where the dynamics are unknown or too complex to model a priori, these probabilities can be estimated through experience, effectively learning the transition matrix through observation of state transitions that result from actions taken by the agent.

Initially, this matrix might come from domain knowledge about the environment, defining how actions lead to state transitions based on the rules or physics of the environment. In learning scenarios, especially in model-based reinforcement learning, the matrix is derived from the agent's interactions and observations, gradually refining the probability estimates as more data is collected. Thus, while the matrix itself doesn't contain learned parameters like those in a neural network, the process of estimating the probabilities can involve learning from data.

This involves learning the probabilities that describe how likely it is to transition from one state to another given a certain action in a reinforcement learning (RL) environment. It's about understanding the dynamics of the environment—specifically, predicting the next state based on the current state and action. This estimation helps in planning and decision-making within the RL framework. The learning here focuses on accurately modeling the environment's dynamics rather than directly improving the decision-making policy of the agent.


Model-Based RL: Model-based reinforcement learning involves learning a model of the environment's dynamics (how actions change the state of the environment) and rewards. The agent uses this model to simulate outcomes of different actions and plan the best course of action, effectively allowing it to anticipate future states and rewards to make informed decisions.

Model-Free RL: Model-free reinforcement learning directly learns the optimal policy or value function without constructing an explicit model of the environment's dynamics. The agent learns from the actual experience by interacting with the environment, relying on trial and error to figure out the best actions.

Online Learning: In online learning, the agent learns directly from the environment in a sequential and continuous manner, updating its knowledge with each new piece of information or interaction. This approach allows the agent to adapt to changes in the environment but requires access to the environment for continuous learning.

Offline Learning: Offline learning, also known as batch learning, involves training the agent on a fixed dataset of experiences collected beforehand, without further interaction with the environment during the learning process. This method is useful when direct interaction with the environment is costly, risky, or impractical, but it may limit the agent's ability to adapt to new or unseen situations.

 - Policy: A policy is a strategy used by the agent, defining which action to take in each state of the environment. It maps states to actions, guiding the agent's behavior.
 - Value Function: The value function estimates the total amount of reward an agent can expect to accumulate over the future, starting from a specific state and following a particular policy. It helps in evaluating the desirability of states.
 - Reward Function: The reward function provides immediate feedback to the agent by assigning a score (reward) to each action's outcome in a particular state, indicating the short-term benefit of that action.
 - These three elements are interconnected: the policy aims to maximize the cumulative reward as estimated by the value function, which in turn is calculated based on the rewards assigned by the reward function.

 - State: A representation of the current situation or condition of the environment that the agent is in.
 - Action: Any decision or move made by the agent that can change the state.
 - Episode: A sequence of states, actions, and rewards that ends when a terminal state is reached or after a certain number of steps.
 - Discount Factor: A number between 0 and 1 used to reduce the value of future rewards, reflecting the preference for immediate rewards over future rewards.
 - Q-Learning: A model-free reinforcement learning algorithm that learns the value of an action in a particular state, using the Q-function, without requiring a model of the environment.
 - Temporal Difference (TD) Learning: A method in reinforcement learning that updates the value estimate based on the difference (or error) between consecutive value estimates.

 - Policy-Based Methods: Policy-based methods in reinforcement learning directly learn the policy that dictates the agent's actions without explicitly learning a value function. These methods optimize the policy by maximizing expected rewards and are particularly effective in continuous action spaces or when the policy is stochastic.
 - Value-Based Methods: Value-based methods focus on learning the value function, which estimates how good each state or state-action pair is, in terms of expected rewards. The policy is then derived indirectly from the value function, typically by choosing actions that lead to states with higher values. These methods excel in discrete action spaces and when the policy can be easily determined from the value function.


 === ENVIRONMENTS ===

 - History: This is the sequence of states, actions, and rewards experienced by the agent up to the current moment. It represents the agent's interaction with the environment over time, which can be crucial for making informed decisions in partially observable environments.
 - Markov Property: The Markov property signifies that the future state of the environment depends only on the current state and the action taken, not on the sequence of events that preceded it. This property simplifies the decision-making process by focusing only on the present state for predicting future outcomes.
 - Observation: An observation is what the agent perceives about the current state of the environment.
	 - Difference Between Observation and State: The state represents the true condition of the environment, potentially including information not directly perceivable by the agent. In contrast, an observation is the agent's perception of the state, which might be incomplete or noisy, especially in partially observable settings.
 - Fully observable: The agent has access to complete information about the current state of the environment at all times, allowing it to make fully informed decisions.
 - Partially Observable: The agent has limited information about the current state, making it challenging to make optimal decisions without additional strategies or information.
 - Deterministic: Every action taken by the agent leads to a predictable outcome, with no uncertainty involved.
 - Stochastic: The outcome of actions is uncertain, introducing randomness into the state transitions or rewards.
 - Static: The environment does not change while the agent is deliberating, ensuring stability in decision-making contexts.
 - Dynamic: The state of the environment can change while the agent is making decisions, requiring the agent to adapt quickly.
 - Discrete: The environment has a finite number of states and actions, making it more manageable but potentially limiting in complexity.
 - Continuous: States or actions can take on a range of values, offering a more realistic but computationally challenging setting.

=== MARKOV ===

A Markov Decision Process (MDP) is a mathematical framework used to describe a fully observable environment for decision-making where outcomes are partly random and partly under the control of a decision maker. It's defined by a set of states, a set of actions, a transition model (which describes what state we might move to next, given a current state and action), and a reward function (which gives feedback on the desirability of a state). MDPs are used to model and solve problems where you need to make a sequence of decisions to maximize some notion of cumulative reward.

A Markov game, also known as a stochastic game, extends MDPs to include multiple decision-makers or agents. In a Markov game, each agent's decisions not only affect the environment but also the outcomes and rewards of other agents. It incorporates the dynamics of MDPs but within a multiplayer setting, introducing competitive or cooperative elements where each agent aims to optimize their own rewards through their actions, given the state of the environment and considering the actions of other agents.


WAKER: Weighted Ac-
quisition of Knowledge across Environments for Robustness
https://arxiv.org/pdf/2306.09205.pdf

Doing model based reinforcement learning basically means that you are learning how to model the environment instead of learning how maximize a value/reward function, which implicity has a model of the environment. We are basically making this more expliciti. The advantage of learning world models explicitly, is that they are more robust. You can learn how the world works in general, and then that can be applied to any reward function down the line later. This is a more promising approach to generally capable agents.


